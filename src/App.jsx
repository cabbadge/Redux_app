import React from "react";
import './Style/App.css';
import {useDispatch, useSelector} from "react-redux";
import {
    addCustomerAction,
    async_addCustomerAction,
    removeCustomerAction
} from "./Store/CustomerReduser";
import {fetchCustomers} from "./asyncActions/Customers";
import { async_addCashAction, async_getCashAction} from "./Store/CashReduser";


function App() {
    const dispatch=useDispatch()

    const addCustomers=(name)=>{
        const customer={
            name,
            id:Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomers=(customer)=>{
        dispatch(removeCustomerAction(customer.id))
    }

    const cash=useSelector(state => state.cashReducer.cash)
    const customers=useSelector(state => state.customerReducer.customers)

  return (
    <div className="App">
        <div style={{fontSize:'3rem', marginBottom:10}}>Баланс: {cash}</div>
        <div style={{display:'flex'}}>
          <button onClick={()=>{dispatch(async_addCashAction())}}>Добавить</button>
          <button onClick={()=>{dispatch(async_getCashAction())}}>Снять</button>
            <button onClick={()=>{dispatch(async_addCustomerAction())}}>Получает клиента из базы saga</button>
            <button onClick={()=>{dispatch(fetchCustomers())}}>Получает клиента из базы</button>
            {customers.length>0
                ?
                <div>
                    {customers.map(customer=>
                    <div onClick={()=>{removeCustomers(customer)}}  style={{fontSize:'2rem', border:'1px solid teal', padding:'10px',marginTop:5, color:"teal"}}>
                        {customer.name}
                    </div>)}
                </div>
                :<div style={{fontSize:'2rem'}}>
                    Клиенты отсутсвуют!
                </div>
            }

        </div>
    </div>
  );
}

export default App;
