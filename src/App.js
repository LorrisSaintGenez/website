import React, { Component } from 'react';

import About from './about/about.js';
import Education from './education/education.js';
import Experience from './experience/experience.js';

import Linkedin from './linkedin.png';
import Github from './github.png';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="background-image-style" />
        <a href="https://www.linkedin.com/in/lorris-saint-genez/">
          <img alt="linkedin" src={Linkedin} className="linkedin"  />
        </a>
        <a href="https://github.com/LorrisSaintGenez">
          <img alt="github" src={Github} className="github "/>
        </a>
        <About/>
        <Education/>
        <Experience/>
      </div>
    );
  }
}

export default App;
