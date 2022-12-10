const defaultState={
    cash:5
}
export const cashReducer=(state=defaultState, action)=>{
    switch (action.type){
        case 'Add_cash':
            return {...state,cash:state.cash + action.payload}
        case 'Get_cash':
            return {...state,cash:state.cash - action.payload}

        default:
            return state;
    }
}