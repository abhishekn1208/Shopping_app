export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const USER_INFO = 'USER_INFO'

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
    return{
        type : UPDATE_QUANTITY,
        payload : {productId,quantity}
    }
}

export const userInfo=(payload)=>{
 
    return{
        type : USER_INFO,
        payload
    }
}