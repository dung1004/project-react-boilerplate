/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Content from '../layout/content/Content';
import SignupForm from '../layout/form/Fomik';
import InfoUser from '../layout/table/InfoUser';

class DieuhuongURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/home" component={Content} />
        <Route path="/contact" component={SignupForm} />
        <Route path="/info" component={InfoUser} />
      </div>
    );
  }
}

export default DieuhuongURL;
