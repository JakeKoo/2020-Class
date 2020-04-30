import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    Table, 
    Col, 
    Button, 
    Modal, 
    FormGroup, 
    ControlLabel, 
    HelpBlock, 
    FormControl 
} from "react-bootstrap"
import axios from 'axios'
import * as actionTypes from '../../store/actions'

const PORT = process.env.PORT || 5000

class Inventory extends Component {
    state = {
        products: this.props.products,
        showModal: false,
        productToUpdate: null,
        preEditProductName: null,
        preEditDescription: null,
        preEditPrice: null,
        preEditQuantity: null,
    }

    showAllProducts = () => {
        this.setState({
            products: this.props.products,
        })
    }

    filterCategory = (category_id) => {
        axios({
            method: 'get',
            url: 'https://arcane-spire-63656.herokuapp.com/stock',
            headers: { 'Authorization': this.props.token }
        })
            .then((response) => {
                console.log(category_id)
                let productsArr = response.data.filter((product) => product.category_id === category_id)
                console.log(productsArr)
                this.props.updateProducts(productsArr)
            })
    }

    refreshProducts = () => {
        this.setState({
            showMensCategory: false,
            showWomensCategory: false,
            showKidsCategory: false,
            showMiscCategory: false
        })
        axios({
            method: 'get',
            url: 'https://arcane-spire-63656.herokuapp.com/stock',
            headers: { 'Authorization': this.props.token }
        })
            .then((response) => {
                this.props.updateProducts(response.data)
            })
    }

    deleteProduct = (productID, index) => {
        const newProducts = [...this.props.products]
        newProducts.splice(index, 1)
        this.props.updateProducts(newProducts)
        // axios({
        //     method: 'delete',
        //     url: 'http://localhost:3000/stock' + productID,
        //     headers: { 'Authorization': this.props.token }
        // })
        // .then(response => console.log(response))
    }

    updateProduct = (product_name, description, price, quantity) => {
        console.log("Current Product ID: " + this.state.productToUpdate)
        console.log(product_name, description, price, quantity)

        let updatedProduct = {
            category_id: 15,
            product_name: product_name,
            price: price,
            description: description,
            quantity: quantity,
            photo: "photo"
        }

        console.log("updatedProduct: " + updatedProduct)

        axios({
            method: 'patch',
            url: 'https://arcane-spire-63656.herokuapp.com/stock' + this.state.productToUpdate,
            data: updatedProduct,
            headers: { 'Authorization': this.props.token }
        })
            .then((response) => {
                console.log(response)
                axios({
                    method: 'get',
                    url: 'https://arcane-spire-63656.herokuapp.com/stock',
                    headers: { 'Authorization': this.props.token }
                })
                    .then((response) => {
                        console.log(response.data)
                        let newProductsArr = response.data
                        this.props.updateProducts(newProductsArr)
                        this.setState({ showModal: false })
                    })
            })
    }

    render() {

        const sortKeys = (a, b) => { return a.id - b.id }

        const products = this.props.products.sort(sortKeys).map((product, index) => {
            return <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category_id}</td>
                <td><Button bsSize="small" bsStyle="info" onClick={() => {
                    this.setState({ 
                        showModal: true, 
                        productToUpdate: product.id,
                        preEditProductName: product.product_name,
                        preEditDescription: product.description,
                        preEditPrice: product.price,
                        preEditQuantity: product.quantity
                    })}} key={product.id}>Edit</Button></td>
                <td><Button bsSize="small" bsStyle="danger" onClick={() => {
                    this.deleteProduct(product.id, index)
                    // this.props.onDeleteProduct(product.id)
                }}>Delete</Button></td>
            </tr>
        })

        return (
            <div className="container"style={{ margin: 10 }}>
                <Col md={1} />
                <Col md={10}>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Inventory ID</th>
                                <th>Type</th>
                                <th>Color</th>
                                <th>Color Secondary</th>
                                <th>Length</th>
                                <th>Width</th>
                                <th>Base Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products}
                        </tbody>
                    </Table>
                    {this.state.showModal ?
                        <div className="static-modal">
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>Update Existing Product</Modal.Title>
                                </Modal.Header>
                                <Modal.Footer>
                                    <Button onClick={() => this.setState({ showModal: false })}>Cancel</Button>
                                    <Button type="button" bsStyle="success" onClick={() => this.updateProduct(this.product_name.value, this.description.value, this.price.value, this.quantity.value)}>Update Product</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                        : null}
                </Col>
                <Col md={1} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        products: state.auth.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteProduct: (productID) => dispatch(actionTypes.deleteProduct(productID)),
        updateProducts: (products) => dispatch(actionTypes.editProduct(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
