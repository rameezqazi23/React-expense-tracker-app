import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="plus">
            {transaction.description}
            
            <span>{transaction.transactionAmmount}</span>

            <button className="delete-btn">X</button>
        </li>
    )
}
