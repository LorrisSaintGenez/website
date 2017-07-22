import React, { Component } from 'react';
import _ from 'lodash';

import './experience.css';

import SG from '../assets/sg.png';

class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      schools: [
        {
          name: "Société Générale",
          sector: "Bank & Insurance",
          job: "Full-Stack Web Developer",
          year: "Sept. '16 - Jan. '17"
        },
        {
          name: "Bernar PLC",
          sector: "Aeronautics Industry",
          job: "Stock Manager",
          year: "May '15 - June '15"
        }
      ],
      description_id: 0
    }
  }

  descriptionExperience(id) {
    this.setState({description_id: id});
  }

  render() {

    const selectedStyle = {
      borderRight: "2px solid dodgerblue",
      marginLeft: "2px"
    };

    return (
      <div className="App-experience">
        <div className="container">
          <div className="row">
            <div id="experience">Experience</div>
            <div className="col-xs-12 col-lg-6 col-md-6 col-lg-push-6 col-md-push-6">
              {_.map(this.state.schools, (school, index) => {
                return (
                  <div className="col-xs-12" key={index} style={this.state.description_id === index ? selectedStyle : null} id="company" onClick={() => this.descriptionExperience(index)}>
                    <h1 id="item-name"><b>{school.name}</b></h1>
                    <h3>{school.sector}</h3>
                    <h4>{school.job}</h4>
                    <h4>{school.year}</h4>
                  </div>
                )
              })}
            </div>
            <div className="col-xs-12 col-lg-6 col-md-6 col-lg-pull-6 col-md-pull-6 description-company">
              <div hidden={this.state.description_id}>
                <img alt="SG" id="company-image" src={SG} />
                <br/>
                <div id="description-text">
                  <b>Société Générale</b> is a French multinational banking and financial services company. The multinational is France's <b>third largest bank</b> by total assets.
                  <br/>
                  <br/>
                  As a <b>Full-Stack Web Developer</b> Intern, I've developed a <b>web application</b> gathering various internal services, through <b>agile</b> development. MVP delivered in <b>less than three months</b>.
                  Also, I've <b>enhanced</b> code and agility of the development with code reviews, <b>QA with > 80%</b> code coverage tests and internal API's pull requests.
                  Finally, I've <b>taught</b> an assembly of developers about the basics of <b>Go</b> programming language.
                </div>
              </div>
              <div hidden={!this.state.description_id}>
                <div id="description-text">
                  <b>Bernar PLC</b> was a small company, one of the six entities of Sira Groupe, specialized in manufacture of aircraft parts, such as <b>Rafale</b> and <b>Falcon</b>.
                  The firm was working directly for <b>Dassault</b> and <b>Thalès</b>.
                  <br/>
                  <br/>
                  During my internship as a <b>Stock Manager</b>, I was in charge of stocks and ERP (Enterprise Resource Planning).
                  I have <b>increased</b> storage's efficiency, by deeply <b>redesigning</b> storage methods and various <b>team workshops</b>.
                  Finally, my solutions were used <b>everywhere</b> in the company.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;