import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Footer from './footer/footer.js';
import About from './about/about.js';
import Education from './education/education.js';
import Experience from './experience/experience.js';
import Skill from './skill/skill.js';
import Contact from './contact/contact.js';

import Linkedin from './assets/linkedin.png';
import Github from './assets/github.png';

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="background-image-style" />
        <a href="https://www.linkedin.com/in/lorris-saint-genez/">
          <img alt="linkedin" src={Linkedin} className="linkedin" />
        </a>
        <a href="https://github.com/LorrisSaintGenez">
          <img alt="github" src={Github} className="github "/>
        </a>
        <Footer />
        <ScrollableAnchor id={'about-anchor'}>
          <About/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'education-anchor'}>
          <Education/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'experience-anchor'}>
          <Experience/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'skill-anchor'}>
          <Skill/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact-anchor'}>
          <Contact/>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
