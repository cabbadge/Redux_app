const defaultState={
    customers:[]
}
export const customerReducer=(state=defaultState, action)=>{
    switch (action.type){
        case 'Add_customer':
            return {...state,cash:state.cash + action.payload}
        case 'Get_customer':
            return {...state,cash:state.cash - action.payload}

        default:
            return state;
    }
}