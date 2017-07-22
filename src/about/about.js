import React, { Component } from 'react';

import Lorris from '../assets/lorris.jpg';

class About extends Component {
  render() {
    return (
      <div className="App-about">
        <div className="centered">
          <img alt="Lorris" src={Lorris} className="img-circle profile-picture" />
          <div className="hidiho">Hi, I'm <b>Lorris Saint-Genez</b> !</div>
          <h4>Engineer student <b><a href="http://www.epita.fr/"> @EPITA</a></b> - Full-Stack Developer</h4>
        </div>
      </div>
    );
  }
}

export default About;
