export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

export const addToCart=(payload)=>{
    return{
        type : ADD_TO_CART,
        payload
    }
}

export const removeFromCart=(payload)=>{
    return{
        type : REMOVE_FROM_CART,
        payload
    }
}

export const updateQuantity=(productId,quantity)=>{
    console.log(quantity)
    console.log(productId)
    return{
        type : UPDATE_QUANTITY,
        payload : {productId,quantity}
    }
}