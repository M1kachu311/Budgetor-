import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuDrawer from './MenuDrawer';

class Header extends Component {
  render() {
    return (
        <AppBar postion="static">
            <MenuDrawer />
        </AppBar>
    )
  }
}

export default Header
