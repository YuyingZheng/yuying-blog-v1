import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Career from './components/Career';

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Main />
      <Career />

    </div>
  );
}

export default App;
