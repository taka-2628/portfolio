//default imports (to be deleted)
import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header />
      
      {/* below to be deleted */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
