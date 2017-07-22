import React, { Component } from 'react';
import _ from 'lodash';

import CategoryItem from '../common/categoryItem.js';

import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Facebook from '../assets/facebook.png';
import Pdf from '../assets/pdf.png';

import Resume from '../assets/resume-lorris-saint-genez.pdf';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          name: "Information"
        },
        {
          name: "Links"
        }
      ],
    description_id: 0
  };

  this.descriptionDisplay = this.descriptionDisplay.bind(this);
}

  descriptionDisplay(id) {
    this.setState({description_id: id});
  }

  render() {
    return (
      <div className="App-right">
        <div className="container">
          <div className="row">
            <div id="experience">Contact</div>
            <div className="col-xs-12 col-lg-6 col-md-6 col-lg-push-6 col-md-push-6">
              {_.map(this.state.items, (item, index) => {
                return (<CategoryItem key={index} isOnLeft={false} item={item} index={index} description_id={this.state.description_id} descriptionDisplay={this.descriptionDisplay} />)
              })}
            </div>
            <div className="col-xs-12 col-lg-6 col-md-6 col-lg-pull-6 col-md-pull-6 description">
              <div hidden={this.state.description_id}>
                <div className="hidiho">Email</div>
                <a href="mailto:lorris.saint-genez@epita.fr">lorris.saint-genez@epita.fr</a>
                <br/>
                <div className="hidiho">Phone number</div>
                <a href="tel:+33622433212">+33 6 22 43 32 12</a>
                <br/>
                <div className="hidiho">Address</div>
                <h3>21 Rue Pasteur</h3>
                <h3>94270 Le Kremlin-Bicêtre</h3>
                <h3>FRANCE</h3>
                <br/>
                <div className="hidiho">Feel free to reach me !</div>
              </div>
              <div hidden={!this.state.description_id}>
                <div className="hidiho">Click the links below !</div>
                <div className="col-xs-6 col-md-6 col-lg-6" id="skill">
                  <a href="https://www.linkedin.com/in/lorris-saint-genez/" target="_blank">
                    <img alt="linkedin" src={Linkedin} className="links"/>
                  </a>
                  <div>Linkedin</div>
                  <a href="https://github.com/LorrisSaintGenez" target="_blank">
                    <img alt="github" src={Github} className="links"/>
                  </a>
                  <div>Github</div>
                </div>
                <div className="col-xs-6 col-md-6 col-lg-6" id="skill">
                  <a href="https://www.facebook.com/Reach.Lorris" target="_blank">
                    <img alt="facebook" src={Facebook} className="links"/>
                  </a>
                  <div>Facebook</div>
                  <a href={Resume} target="_blank">
                    <img alt="resume" src={Pdf} className="links"/>
                  </a>
                  <div>Resume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
