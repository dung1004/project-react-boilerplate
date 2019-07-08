import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from '../../components/layout/content/Content';
import Contact from '../../components/layout/contact/Contact';

class DieuhuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Content} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default DieuhuongURL;