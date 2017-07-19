import React, { Component } from 'react';
import './about.css';
import Lorris from '../lorris.jpg';

class About extends Component {
  render() {
    return (
      <div className="App-about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <img src={Lorris} className="img-circle profile-picture" />
              <div className="hidiho">Hi, I'm <b>Lorris Saint-Genez</b> !</div>
              <h4>Engineer student <b><a href="http://www.epita.fr/"> @EPITA</a></b> - Full-Stack Developer</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
