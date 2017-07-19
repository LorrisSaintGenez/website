import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="col-xs-12 links">
        <div className="col-xs-2">About</div>
        <div className="col-xs-3">Education</div>
        <div className="col-xs-2">Experience</div>
        <div className="col-xs-3">Skills</div>
        <div className="col-xs-2">Contact</div>
      </div>
    );
  }
}

export default Footer;