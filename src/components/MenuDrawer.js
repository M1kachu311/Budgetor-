import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Category from '@material-ui/icons/Category';
import AttachMoney from '@material-ui/icons/AttachMoney';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Delete from '@material-ui/icons/Delete';
import Settings from '@material-ui/icons/Settings'; // in order to use those icons you need to install that npm package in your project: npm install @material-ui/icons

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerIcon: {
    color: '#fff',
  },
  drawerButton: {
    '&:hover': {
      backgroundColor: '#2185d0',
    },
  },
  drawerIconStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
};

class MenuDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home', 'Categories'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Home /> : <Category />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {['Monthly budget', 'My account'].map((text2, index) => (
            <ListItem button key={text2}>
              <ListItemIcon>{index % 2 === 0 ? <AttachMoney /> : <AccountCircle />}</ListItemIcon>
              <ListItemText primary={text2} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Trash', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Delete /> : <Settings />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.drawerIconStyle}>
        <Button className={classes.drawerButton} onClick={this.toggleDrawer('left', true)}>
          <IconButton 
            className={classes.drawerIcon}
            aria-label="Open drawer"
          >
          <MenuIcon />
          </IconButton>
        </Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawer);
