import React, { Component, Fragment } from 'react';
import './styles/userArea.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    userArea: {
        display: 'flex',
        flexDirection: 'column',
    },
};


class UserArea extends Component {
  render() {

    const { classes } = this.props;

    return (
        <div className={classes.userArea}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
  }
}
export default withStyles(styles)(UserArea);