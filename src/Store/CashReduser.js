

const defaultState={
    cash:1
}
export const addCash='Add_cash';
export const async_addCash='async_Add_cash';
export const async_getCash='async_Get_cash';
export const getCash='Get_cash';
export const cashReducer=(state=defaultState, action)=>{
    switch (action.type){
        case addCash:
            return {...state,cash:state.cash + 1}
        case getCash:
            return {...state,cash:state.cash - 1}
        default:
            return state;
    }
}
export const addCashAction=()=>({type:addCash})
export const async_addCashAction=()=>({type:async_addCash})
export const async_getCashAction=()=>({type:async_getCash})
export const getCashAction=()=>({type:getCash})