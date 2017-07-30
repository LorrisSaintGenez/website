import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Lorris from '../assets/lorris.jpg';

class About extends Component {

  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <div className="App-about">
          <div className="centered">
            <img alt="Lorris" src={Lorris} className="img-circle profile-picture" />
            <div className="me">Hi, I'm <b>Lorris Saint-Genez</b> !</div>
            <h4>Engineer student <b><a href="http://www.epita.fr/" target="_blank" rel="noopener noreferrer"> @EPITA</a></b> - Full-Stack Developer</h4>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default About;
