import { combineReducers } from "redux";
import { cartReducer } from "./Reducer";

export const rootReducer = combineReducers({
    cart : cartReducer
})