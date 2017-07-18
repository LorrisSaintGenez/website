import React, { Component } from 'react';

import Header from './header/header.js';
import About from './about/about.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
      </div>
    );
  }
}

export default App;
