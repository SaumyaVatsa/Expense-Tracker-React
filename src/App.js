import React from 'react'
import {Header, Balance, IncomeExpenses, TransactionList, AddTransaction}  from './components';
import './App.css';
import { GlobalProvider } from './context/GlobalState';


const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App  