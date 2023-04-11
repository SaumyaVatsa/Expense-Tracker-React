import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Transaction} from './';

const TransactionList = () => {
  const {transaction} = useContext(GlobalContext);
  return (
    <>
        <h3>History</h3>
        <ul className='list'>
            {transaction.map((t)=>(
              <Transaction value = {t}/>
            ))}
        </ul>
    </>
    
  )
}

export default TransactionList