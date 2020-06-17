import React, { createContext, useReducer } from 'react'

//Import Reducer
import AppReducer from './AppReducer'

//Initialize the state

const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionAmmount: 1000 },
        {id: 2, description: "Expense 1", transactionAmmount: -100 },
        {id: 3, description: "Income 2", transactionAmmount: 2000 },
        {id: 4, description: "Expense 2", transactionAmmount: -500 }

    ]
}

//Create Global context

export const GlobalContext = createContext(initialState);

//Create a Provider for the Global Context
//GlobalContext.Proviedr is actually a wraper

export const GlobalProvider = ({ children }) => {

    const [state] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
}