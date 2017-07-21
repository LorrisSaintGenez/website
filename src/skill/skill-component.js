import React, { Component } from 'react';
import _ from 'lodash';

import './skill.css';

class SkillComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="col-xs-12 col-md-12 col-lg-12 div-skill">
      <h1 className="skill-type"><b>{this.props.skillType}</b></h1>
      {_.map(this.props.items, (item, index) => {
        return (
          <div className="col-xs-6 col-md-4 col-lg-3" key={index} id="skill">
            <div>{item.name}</div>
            <i className={item.image}/>
          </div>
        )
      })}
    </div>
    );
  }
}

export default SkillComponent;