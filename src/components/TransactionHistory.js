import React, { useContext } from 'react'

//import Global Context
import { GlobalContext } from '../context/GlobalState'

//Import Transactions 
import { Transaction } from './Transaction'

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);

    console.log("transactions==>",transactions)

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                )
                )}

            </ul>
        </div>
    )
}
