import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'


class Navigation extends Component {

    state = {
    }

    render() {
        return (
            <div> 
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>Inventory Manager</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (products) => dispatch(actionTypes.editProduct(products)),
    }
}

export default connect(mapDispatchToProps)(Navigation)