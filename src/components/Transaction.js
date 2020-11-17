import React, { useContext } from 'react'
//import Global State

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext)

    const sign = transaction.transactionAmmount > 0 ? "+" : "-";
    // const transactionType = transaction.transactionAmmount > 0 ? "plus" : "minus";

    return (

        <li className="plus">
            {transaction.description}
  
            <span>{sign} ${Math.abs(transaction.transactionAmmount)}</span>

            <button onClick={() => delTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
}
