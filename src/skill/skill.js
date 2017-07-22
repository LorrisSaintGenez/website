import React, { Component } from 'react';
import _ from 'lodash';

import SkillComponent from './skill-component.js';
import './skill.css';

class Skill extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skillset: [
        {
          languages: [
            {
              name: "Bootstrap",
              image: "devicon-bootstrap-plain colored"
            },
            {
              name: "C#",
              image: "devicon-csharp-plain colored"
            },
            {
              name: "C++",
              image: "devicon-cplusplus-plain colored"
            },
            {
              name: "CSS3",
              image: "devicon-css3-plain colored"
            },
            {
              name: "Go",
              image: "devicon-go-plain"
            },
            {
              name: "HTML5",
              image: "devicon-html5-plain colored"
            },
            {
              name: "Java",
              image: "devicon-java-plain colored"
            },
            {
              name: "JavaScript",
              image: "devicon-javascript-plain colored"
            },
            {
              name: "Laravel",
              image: "devicon-laravel-plain colored"
            },
            {
              name: ".Net",
              image: "devicon-dot-net-plain colored"
            },
            {
              name: "Node JS",
              image: "devicon-nodejs-plain colored"
            },
            {
              name: "PHP",
              image: "devicon-php-plain colored"
            },
            {
              name: "Python",
              image: "devicon-python-plain colored"
            },
            {
              name: "React JS",
              image: "devicon-react-original colored"
            },
          ],
        },
        {
          databases: [
            {
              name: "MongoDB",
              image: "devicon-mongodb-plain colored"
            },
            {
              name: "MySQL",
              image: "devicon-mysql-plain colored"
            },
            {
              name: "PostgreSQL",
              image: "devicon-postgresql-plain colored"
            },
          ],
        },
        {
          tools: [
            {
              name: "Docker",
              image: "devicon-docker-plain colored"
            },
            {
              name: "Git",
              image: "devicon-git-plain colored"
            },
            {
              name: "Heroku",
              image: "devicon-heroku-original colored"
            },
            {
              name: "Slack",
              image: "devicon-slack-plain"
            },
            {
              name: "Trello",
              image: "devicon-trello-plain colored"
            },
          ],
        },
        {
          platforms: [
            {
              name: "Android",
              image: "devicon-android-plain colored"
            },
            {
              name: "Ubuntu",
              image: "devicon-ubuntu-plain colored"
            },
            {
              name: "Windows",
              image: "devicon-windows8-original colored"
            },
          ],
        }
      ],
      types: [
        "Languages & Frameworks", "Databases", "Tools", "Platforms"
      ],
      skill_id: 0
    }
  }

  displaySkills(id) {
    this.setState({skill_id: id});
  }

  render() {

    const selectedStyle = {
      borderLeft: "2px solid cornflowerblue",
      marginLeft: "-2px"
    };

    return (
      <div className="App-skill">
        <div className="container">
          <div className="row">
            <div id="skills">Skills</div>
            <div className="col-xs-12 col-lg-6 col-md-6">
              {_.map(this.state.types, (type, index) => {
                return (
                  <div className="col-xs-12" key={index} style={this.state.skill_id === index ? selectedStyle : null} id="school" onClick={() => this.displaySkills(index)}>
                    <h1 id="item-name"><b>{type}</b></h1>
                  </div>
                )
              })}
            </div>
            <div className="col-xs-12 col-lg-6 col-md-6">
              {_.map(this.state.skillset, (skilltype, index) => {
                  return (<SkillComponent skilltype={skilltype} hidden={this.state.skill_id !== index} key={index} />)
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
