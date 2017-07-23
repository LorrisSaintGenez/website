import React, { Component } from 'react';

import _ from 'lodash';

class SkillComponent extends Component {

  render() {
    return (
      <div className="col-xs-12 col-md-12 col-lg-12 div-skill">
        <h1 className="skill-type" onClick={() => this.props.descriptionDisplay(this.props.index)}><b>{this.props.title}</b></h1>
        <div hidden={this.props.hidden}>
        {_.map(this.props.skilltype, (skill, index) => {
          return (
            <div className="col-xs-6 col-md-4 col-lg-4" key={index} id="skill">
              <i className={skill.image}/>
              <div>{skill.name}</div>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default SkillComponent;