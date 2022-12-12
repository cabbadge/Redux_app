const defaultState={
    customers:[]
}
export const addCustomer='Add_customer';
export const async_addCustomer='async_addCustomer';


export const removeCustomer='Remove_customer';
export const add_many_customer='add_many_customer';


export const customerReducer=(state=defaultState, action)=>{
    switch (action.type){
        // case add_many_customer:
        //     return {...state,customers: [...state.customers,...action.payload]}
        case addCustomer:
            return {...state,customers:action.payload}
        case removeCustomer:
            return {...state,customers: state.customers.filter(customer=>customer.id !== action.payload)}
        default:
            return state;
    }
}

export const add_many_customerAction=(payload)=>({type:add_many_customer, payload})

export const addCustomerAction=(payload)=>({type:addCustomer, payload})
export const async_addCustomerAction=()=>({type:async_addCustomer})

export const removeCustomerAction=(payload)=>({type:removeCustomer, payload})