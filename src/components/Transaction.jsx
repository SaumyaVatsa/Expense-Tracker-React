import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({value}) => {
  const {deleteTransaction } = useContext(GlobalContext);

  const sign = value.amount < 0 ? '-' : '+';
  return (
    <li className={value.amount < 0 ? 'minus' : 'plus'}>
              {value.text}<span>{sign}${Math.abs(value.amount)}</span><button className='delete-btn' 
              onClick={()=> deleteTransaction(value.id)}>x</button>
    </li>
  )
}

export default Transaction