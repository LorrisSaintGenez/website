import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top navbarColor">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>About me</li>
              <li>Resume</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
