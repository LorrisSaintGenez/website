import React, { Component } from 'react';

import About from './about/about.js';
import Footer from './footer/footer.js';

import Linkedin from './linkedin.png';
import Github from './github.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background-image" />
        <a href="https://www.linkedin.com/in/lorris-saint-genez/">
          <img src={Linkedin} className="linkedin"  />
        </a>
        <a href="https://github.com/LorrisSaintGenez">
          <img src={Github} className="github "/>
        </a>
        <About/>
        <Footer/>
        <About/>
      </div>
    );
  }
}

export default App;
