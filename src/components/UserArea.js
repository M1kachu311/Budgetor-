import React, { Component, Fragment } from 'react';
import './styles/userArea.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

class UserArea extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
  }
}
export default UserArea;