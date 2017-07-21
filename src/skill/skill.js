import React, { Component } from 'react';
import _ from 'lodash';

import Logo from '../logo.svg';
import './skill.css';

class Skill extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          name: "ReactJS",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "NodeJS",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "JavaScript",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "HTML5",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "CSS3",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Bootstrap",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "PHP",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Laravel",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "C#",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Java 7",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Maven",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Python",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "C++",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Android",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Docker",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Git",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "CircleCI",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Trello",
          image: Logo,
          description: "JS Framework",
        },
        {
          name: "Slack",
          image: Logo,
          description: "JS Framework",
        },
      ],
      skill_id: 0
    }
  }

  descriptionSkill(id) {
    this.setState({skill_id: id});
  }

  render() {
    return (
      <div className="App-skill">
        <div className="container">
          <div className="row">
            <div id="skills">Skills</div>
            <div>
              {_.map(this.state.skills, (skill, index) => {
                const triggerAnimation = this.state.skill_id === index;
                return (
                  <div className="col-xs-12 col-md-4 col-lg-3" key={index} id="skill" onClick={() => this.descriptionSkill(index)}>
                    <div className={triggerAnimation ? "col-xs-12 col-xs-pull-2 col-md-12 col-md-pull-4 col-lg-12 col-lg-pull-4" : "col-xs-12 col-md-12 col-lg-12"}>
                      <div id="item-name">{skill.name}</div>
                      <img alt={skill.name} className="skill-image" src={skill.image}/>
                    </div>
                    {triggerAnimation ? (<div className="skill-description">{skill.description}</div>) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
