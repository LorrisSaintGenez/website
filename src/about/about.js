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
              <div className="col-xs-12 col-lg-6 col-md-6">
                <img src={Lorris} className="img-circle profile-picture" />
              </div>
              <div className="col-xs-12 col-lg-6 col-md-6">
                <div className="hidiho">Hi, I'm <b>Lorris Saint-Genez</b> !</div>
                <small>Engineer student <b>@EPITA</b>, Full-Stack Web Developer</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
