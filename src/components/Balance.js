import React, { useContext } from 'react';

//import Global State

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    const transactionAmmounts = transactions.map(transaction => transaction.transactionAmmount);
    const balance = transactionAmmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    console.log(transactionAmmounts)

    return (
        <div>
            <h4>Current Balance</h4>
            <h1>$ {balance}</h1>
        </div>
    )
}
