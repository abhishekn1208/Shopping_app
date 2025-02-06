import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./Action"

const initState={
    items : []
}

export const cartReducer=(state = initState,{type,payload})=>{
    
    switch(type){
        case ADD_TO_CART :
            return{
                ...state,
                items : [...state.items,payload]
            };

        case REMOVE_FROM_CART :
            return{
                ...state,
                items : state.items.filter((item)=>item.id !== payload.id)
            }

        case UPDATE_QUANTITY :
            
            return{
                ...state,
                items : state.items.map((item)=>
                item.id===payload.productId ? {...item,quantity : payload.quantity} : item)
            }
            default:
            return state;
    }
}