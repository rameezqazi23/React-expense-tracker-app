import React, { createContext, useReducer } from 'react'

//Import Reducer
import AppReducer from './AppReducer'

//Initialize the state

const initialState = {
    transactions: []
}

//Create Global context

export const GlobalContext = createContext(initialState);

//Create a Provider for the Global Context
//GlobalContext.Proviedr is actually a wraper

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    function delTransaction(id){
        dispatch({type: 'DEL_TRANSACTION', payload: id});

    }

    function addTransaction(transaction){
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
}