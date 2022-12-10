import {createStore, combineReducers} from "redux";
import {cashReducer} from "./CashReduser";
import {customerReducer} from "./CustomerReduser";

export const rootReducer=combineReducers({
    cash:cashReducer,
    customers:customerReducer
})
export const store=createStore(rootReducer)