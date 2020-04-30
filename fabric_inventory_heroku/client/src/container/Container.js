import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import * as actionTypes from '../store/actions'
import Inventory from './Inventory/Inventory'
import CreateProduct from './CreateProduct/CreateProduct'
import Chart from './ChartContainer/ChartContainer'

class Container extends Component {

    state = {
        showInventory: false,
        showCreateProduct: false,
    }

    showInventory = () => {
        this.props.hideChart()
        this.setState({
            showInventory: true,
            showCreateProduct: false,
        })
    }

    showCreateProduct = () => {
        this.props.hideChart()
        this.setState({
            showInventory: false,
            showCreateProduct: true,
        })
    }

    render() {
        return ( 
            <div className='container'>
                <div>
                    <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                        <ButtonGroup>
                            <Button bsStyle="primary" bsSize="large" onClick={this.showInventory}>
                                View Inventory
                            </Button>
                            <Button bsStyle="primary" bsSize="large" onClick={this.showCreateProduct}>
                                Create New Product
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    {this.props.showContainers ? 
                    <div>
                        {this.state.showInventory ? <Inventory /> : null}
                        {this.state.showCreateProduct ? <CreateProduct /> : null}
                    </div>
                    : null}
                    {this.props.showChart ? <Chart /> : null}
                </div>
                : null}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        showChart: state.auth.showChart,
        showContainers: state.auth.showContainers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideChart: () => dispatch(actionTypes.hideChart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)