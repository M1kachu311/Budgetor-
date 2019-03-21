import React, { Component } from 'react';
import './userArea.css';
import Search from './Search';
import Header from './Header';
import Footer from './Footer';

class UserArea extends Component {
  render() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
  }
}
export default UserArea;