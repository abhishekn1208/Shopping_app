import { rootReducer } from "./CombineReducer";
import {createStore} from 'redux'

export const store = createStore(
    rootReducer
)