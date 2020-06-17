import React from 'react';
import './App.css';

//Import custom components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountsSummary } from './components/AccountsSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'

//Import Global Provider
import { GlobalProvider } from './context/GlobalState';




function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance/>
          <AccountsSummary/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
