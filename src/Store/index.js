import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./CashReduser";
import {customerReducer} from "./CustomerReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../saga";

const sagaMiddleware=createSagaMiddleware()
export const rootReducer=combineReducers({
    cashReducer,
    customerReducer
})
export const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)