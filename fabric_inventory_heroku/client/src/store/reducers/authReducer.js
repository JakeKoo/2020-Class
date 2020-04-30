import * as actionTypes from '../actions'
import updateObject from '../utility'
import axios from 'axios'


const initialState = {
    isAuthed: false,
    token: null,
    showChart: false,
    showContainers: true,
    userID: null,
    error: null,
    loading: false,
    products: [],
    cart: []
}

const showChart = (state, action) => {
    return updateObject(state, { 
        showChart: true,
        showContainers: false 
    })
}

const hideChart = (state, action) => {
    return updateObject(state, { 
        showChart: false,
        showContainers: true
    })
}

const loadProducts = (state, action) => {
    return updateObject(state, { products: action.products })
}

const updateProducts = (state, action) => {
    const updatedProducts = state.products.concat({
        product_name: action.product_name,
        description: action.description,
        price: action.price,
        quantity: action.quantity
    })
    return updateObject(state, { products: updatedProducts })
}

const editProduct = (state, action) => {
    return updateObject(state, { products: action.products })
}

const deleteProduct = (state, action) => {
    axios({
        method: 'delete',
        url: 'http://localhost:3000/stock' + action.productID,
        headers: { 'Authorization': state.token }
    })
    return state
}

const updateQuantity = (state, action) => {
    axios({
        method: 'patch',
        url: 'http://localhost:3000/stock' + action.productID,
        data: { quantity: action.quantity },
        headers: { 'Authorization': state.token }
    })
        .then(() => {
            axios({
                method: 'get',
                url: 'http://localhost:3000/stock',
                headers: { 'Authorization': state.token }
            })
                .then((response) => {
                    console.log(response)
                    let newArr = response.data
                    console.log('New Array: ' + newArr)
                    return updateObject(state, { products: newArr })
                })
        })
    return state
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.LOAD_PRODUCTS: return loadProducts(state, action)
        case actionTypes.UPDATE_PRODUCTS: return updateProducts(state, action)
        case actionTypes.DELETE_PRODUCT: return deleteProduct(state, action)
        case actionTypes.EDIT_PRODUCT: return editProduct(state, action)
        case actionTypes.UPDATE_QUANTITY: return updateQuantity(state, action)
        case actionTypes.SHOW_CHART: return showChart(state, action)
        case actionTypes.HIDE_CHART: return hideChart(state, action)
        default: return state
    }
}

export default reducer