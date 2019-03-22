import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuDrawer from './MenuDrawer';
import { withStyles } from '@material-ui/core/styles';

//here is where we can change the styles directly. we need to import withstyles from mui/core and export it at the bottom of the file (...withStyles(styles)...)
const styles = {
  root: {
    background: '#2185d0',
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar 
          postion="static" 
          classes={{
          root: classes.root, //here we implement our style defined at root within the  styles variable
          }}
        >
            <MenuDrawer />
        </AppBar>
    )
  }
}

export default withStyles(styles)(Header)
