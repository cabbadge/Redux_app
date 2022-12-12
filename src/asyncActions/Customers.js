import {add_many_customerAction} from "../Store/CustomerReduser";

export const fetchCustomers=()=>{
    return dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(add_many_customerAction(json)))
    }
}
