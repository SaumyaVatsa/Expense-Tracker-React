import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const {transaction} = useContext(GlobalContext);
  const amounts = transaction.map(t => t.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
        <h4>Your Balance</h4>
        <h2  id="balance">${total}</h2>
    </>
  )
}

export default Balance