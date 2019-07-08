import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menuright from './Menuright';


class Header extends Component {
    render() {
        return (
            <AppBar position="static" color="primary">
                <Toolbar className="menu">
                    <Typography variant="h6">
                        Demo  React-boiler-plalte
                    </Typography>
                    <Menuright/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;