import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class Menuright extends Component {
    render() {
        return (
            <div>
                <ul>
					<li>
                        <NavLink activeClassName = 'active' to="/">Home</NavLink>
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