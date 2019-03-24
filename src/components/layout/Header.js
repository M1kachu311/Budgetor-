import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuDrawer from '../MenuDrawer';
import { withStyles } from '@material-ui/core/styles';

//here is where we can change the styles directly. we need to import withstyles from mui/core and export it at the bottom of the file (...withStyles(styles)...)
const styles = {
  header: {
    background: '#2185d0',
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar 
          postion="static" 
          className={classes.header}
        >
            <MenuDrawer />
        </AppBar>
    )
  }
}

export default withStyles(styles)(Header)
