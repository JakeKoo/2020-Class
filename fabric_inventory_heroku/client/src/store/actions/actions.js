import * as actions from './types'

export const loadProducts = (products) => {
    return {
        type: actions.LOAD_PRODUCTS,
        products: products
    }
}

export const showChart = () => ({ type: actions.SHOW_CHART })
export const hideChart = () => ({ type: actions.HIDE_CHART })

export const updateProducts = (product_name, description, price, quantity) => {
    return {
        type: actions.UPDATE_PRODUCTS,
        product_name: product_name,
        description: description,
        price: price,
        quantity: quantity
    }
}

export const editProduct = (products) => {
    return {
        type: actions.EDIT_PRODUCT,
        products: products
    }
}

export const deleteProduct = (productID) => {
    return {
        type: actions.DELETE_PRODUCT,
        productID: productID
    }
}

export const incrementQuantity = (productID, quantity) => {
    return {
        type: actions.INCREMENT_QUANTITY,
        productID: productID,
        quantity: quantity
    }
}

export const updateQuantity = (product_name, productID, quantity) => {
    return {
        type: actions.UPDATE_QUANTITY,
        product_name: product_name,
        productID: productID,
        quantity: quantity
    }
}