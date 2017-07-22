import React, { Component } from 'react';
import _ from 'lodash';

import './education.css';

import Epita from '../assets/epita.png';
import Griffith from '../assets/griffith.jpg';

class Education extends Component {

  constructor(props) {
    super(props);

    this.state = {
      schools: [
        {
          name: "EPITA",
          degree: "Master of Science",
          specialization: "Computer Science and Engineering",
          year: "2013-2018"
        },
        {
          name: "Griffith College Dublin",
          degree: "Bachelor of Science",
          specialization: "Computer Science",
          year: "2015"
        }
      ],
      description_id: 0
    }
  }

  descriptionSchool(id) {
    this.setState({description_id: id});
  }

  render() {

    const selectedStyle = {
      borderLeft: "2px solid cornflowerblue",
      marginLeft: "-2px"
    };

    return (
      <div className="App-education">
        <div className="container">
          <div className="row">
            <div id="education">Education</div>
            <div className="col-xs-12 col-lg-6 col-md-6">
              {_.map(this.state.schools, (school, index) => {
                return (
                  <div className="col-xs-12" key={index} style={this.state.description_id === index ? selectedStyle : null} id="school" onClick={() => this.descriptionSchool(index)}>
                    <h1 id="item-name"><b>{school.name}</b></h1>
                    <h3>{school.degree}</h3>
                    <h4>{school.specialization}</h4>
                    <h4>{school.year}</h4>
                  </div>
                )
              })}
            </div>
            <div className="col-xs-12 col-lg-6 col-md-6 description-school">
              <div hidden={this.state.description_id}>
                <img alt="EPITA" id="school-image" src={Epita} />
                <br/>
                <div id="description-text">
                  <b>EPITA</b> is a Privately Endowed Higher Educational Institution recognized and fully accredited by the French State.
                  Programs accredited by the CTI Commission and the French Ministry of Higher Education.
                  <br/>
                  <br/>
                  I am specialized in <b>Web and Mobile development</b>. I've learned how to build <b>fast</b>, <b>responsive</b> and <b>secured</b> applications through a <b>continuous deployment</b> process.
                  I will graduate in Summer 2018. I currently have a <b>3.3 GPA</b>.
                </div>
              </div>
              <div hidden={!this.state.description_id}>
                <img alt="Griffith" id="school-image" src={Griffith} />
                <br/>
                <div id="description-text">
                  <b>Griffith College Dublin</b> is part of Ireland's largest independent third level institution.
                  I am graduated from GCD since May 2015, in <b>Computer Science</b>, with a <b>3.12 GPA</b>.
                  <br/>
                  <br/>
                  Throughout the curriculum, I've learned basics of <b>Android and Java development</b>, and advanced <b>Operating Systems</b> theory.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;