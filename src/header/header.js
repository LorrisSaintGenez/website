import React, { Component } from 'react';
import { goToAnchor } from 'react-scrollable-anchor'

import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container custom-footer">
          <div className="row">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="menu-item">
                  <a title="About" onClick={() => goToAnchor('about')}>About</a>
                </li>
                <li className="menu-item">
                  <a title="Education" onClick={() => goToAnchor("education")}>Education</a>
                </li>
                <li className="menu-item">
                  <a title="Experience" onClick={() => goToAnchor("experience")}>Experience</a>
                </li>
                <li className="menu-item">
                  <a title="Skills" onClick={() => goToAnchor("skill")}>Skills</a>
                </li>
                <li className="menu-item">
                  <a title="Skills" onClick={() => goToAnchor("contact")}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/lorris-saint-genez/">
            <img alt="linkedin" src={Linkedin} className="linkedin" />
          </a>
          <a href="https://github.com/LorrisSaintGenez">
            <img alt="github" src={Github} className="github "/>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;