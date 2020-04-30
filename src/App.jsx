import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Career from './components/Career';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';






function App() {
 
  return (
    <div className="App">
      <Header className="Header-app">
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Main />
      <Career />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;


