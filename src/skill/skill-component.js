import React, { Component } from 'react';
import _ from 'lodash';

class SkillComponent extends Component {

  render() {
    return (
    <div className="col-xs-12 col-md-12 col-lg-12 div-skill" hidden={this.props.hidden}>
      {_.map(this.props.skilltype, (skill, index) => {
        return (
          <div key={index}>
          {_.map(skill, (item, i) => {
            return (
              <div className="col-xs-6 col-md-6 col-lg-6" key={i} id="skill">
                <i className={item.image}/>
                <div>{item.name}</div>
              </div>
            )
          })}
          </div>
        )
      })}
    </div>
    );
  }
}

export default SkillComponent;