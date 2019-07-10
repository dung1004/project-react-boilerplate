/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


// eslint-disable-next-line react/prefer-stateless-function
class Menuright extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink  to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menuright;