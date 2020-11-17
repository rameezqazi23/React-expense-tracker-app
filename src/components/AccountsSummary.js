import React, { useContext } from 'react';
//import Global state
import { GlobalContext } from '../context/GlobalState';

export const AccountsSummary = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionAmmounts = transactions.map(transaction => transaction.transactionAmmount);
    // console.log(transactionAmmounts)

    //calculate the income & expense from the transactions array

    const income = transactionAmmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2)

    const expense = transactionAmmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2)

    // console.log("income==>", income)
    // console.log("expense==>", expense)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+PKR {income}</p>

            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-PKR {expense}</p>

            </div>

        </div>
    )
}
