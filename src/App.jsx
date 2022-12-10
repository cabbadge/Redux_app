import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";


function App() {
    const despatch=useDispatch()

    const addCash=(cash)=>{
        despatch({type:'Add_cash', payload:cash})
    }
    const getCash=(cash)=>{
        despatch({type:'Get_cash', payload:cash})
    }

    const cash=useSelector(state => state.cash.cash)
    console.log(cash)
  return (
    <div className="App">
        <div style={{fontSize:'3rem'}}>{cash}</div>
        <div style={{display:'flex'}}>
          <button onClick={()=>{addCash(Number(prompt()))}}>Пополнить счет</button>
          <button onClick={()=>{getCash(Number(prompt()))}}>Снять с счета</button>

        </div>
    </div>
  );
}

export default App;
