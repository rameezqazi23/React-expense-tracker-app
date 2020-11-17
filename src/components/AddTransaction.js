import React, {useState, useContext} from 'react'

//import Global State
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = (transactions) => {

    const [description, setDesciption] = useState('');
    const [transactionAmmount, setTransactionAmmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmmount: +transactionAmmount,
        }

        addTransaction(newTransaction);

    }
    // console.log("transaction==>", transactionAmmount)

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text" 
                           id="description" 
                           placeholder="Detail of Transaction" 
                           value={description}
                           onChange={(e) => setDesciption(e.target.value)}
                    />

                </div>

                <div className="form-control">
                    <label htmlFor="transactionammount">
                        Transaction Ammount
                        (negative - for expense positive + for income)
                    </label>
                    <input type="number" 
                           id="transactionammount" 
                           placeholder="Enter transaction ammount" 
                           value={transactionAmmount}
                           onChange={(e) => setTransactionAmmount(e.target.value)}
                    />
                    
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
