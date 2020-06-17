import React, {useState} from 'react'

export const AddTransaction = () => {

    const [description, setDesciption] = useState();
    const [transactionAmmount, setTransactionAmmount] = useState();

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
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
                    </label>
                    <input type="number" 
                           id="transactionammount" 
                           placeholder="Enter transaction ammount" 
                           value={transactionAmmount}
                           onChange={(e) => setTransactionAmmount(e.target.value)}
                    />
                    
                </div>
                <button className="btn"> 
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
