import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import axios from 'axios'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    Col
} from "react-bootstrap"

class CreateProduct extends Component {

    state = {
        show: true
    }

    handleSelectChange = (e) => {
        console.log('[onSelectChange].value ' + this.category_id.value)
    }

    addToDB = (brand, type, subtype, length, width, price) => {
        console.log(brand, type, subtype, length, width, price)

        let newProduct = {
            brand: brand,
            type: type,
            subtype: subtype,
            length: length,
            width: width,
            price: price
        }

        axios({
            method: 'post',
            url: 'https://arcane-spire-63656.herokuapp.com/stock', 
            data: newProduct,
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
                this.props.updateProducts(response.data)
            })
        })
    }

    hideCreateProduct = () => {
        this.setState({ show: false })
    }

    
    render() {

        function FieldGroup({ id, label, help, ...props }) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} onChange={props.change} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            )
        }
        return (
            <div className="container" style={{ textAlign: "left" }}>
                <Col md={2} />
                <Col md={8}>
                <br /><br />
            {this.state.show ?
                    <form>
                        <FieldGroup id="formControlsText" type="text" label="Type" inputRef={(ref) => { this.brand = ref }} />
                        <FieldGroup id="formControlsText" type="text" label="Color" inputRef={(ref) => { this.type = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Color Secondary" inputRef={(ref) => { this.subtype = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Length" inputRef={(ref) => { this.length = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Width" inputRef={(ref) => { this.width = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Price" inputRef={(ref) => { this.price = ref }} />

                        <Button type="button" bsStyle="success" onClick={() => {
                            this.addToDB(this.brand.value, this.type.value, this.subtype.value, this.length.value, this.width.value, this.width.price)
                            this.hideCreateProduct()
                        }}>
                            Create Product
                        </Button>
                    </form>
                    : null}
                    <br />
                    <br />
                </Col>
                <Col md={2} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProducts: (products) => dispatch(actionTypes.loadProducts(products))
    }
}

export default connect(mapDispatchToProps)(CreateProduct)

