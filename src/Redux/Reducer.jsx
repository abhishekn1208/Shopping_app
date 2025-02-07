import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, USER_INFO } from "./Action"

const initState={
    items : [],
    username : ""
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
        case USER_INFO : 
        return{
            ...state,
           username : payload
        }
            default:
            return state;
    }
}