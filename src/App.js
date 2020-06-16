import React from 'react';
import './App.css';

//Import custom components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountsSummary } from './components/AccountsSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
    <div>
        <Header/>
        <div className="container">
          <Balance/>
          <AccountsSummary/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
    </div>
  );
}

export default App;
