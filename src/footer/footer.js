import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
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
                  <a href="#about-anchor" title="About">About</a>
                </li>
                <li className="menu-item">
                  <a href="#education-anchor" title="Education">Education</a>
                </li>
                <li className="menu-item">
                  <a href="#experience-anchor" title="Experience">Experience</a>
                </li>
                <li className="menu-item">
                  <a href="#skill-anchor" title="Skills">Skills</a>
                </li>
                <li className="menu-item">
                  <a href="#contact-anchor" title="Skills">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;