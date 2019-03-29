import React, { Component } from 'react';
import LeftSide from './components/layout/LeftSide';
import RightSide from './components/layout/RightSide';
import UserArea from './components/UserArea'
import './App.css';

class App extends Component {
  state = { logedIn: true}; 
  render() {
    if(this.state.logedIn === false) {
      return (
        <div className="App">
          <LeftSide />
          <RightSide />
        </div>
      );
    } else if (this.state.logedIn === true) {
      return (
          <UserArea />
      ); 
    }
  }
}

export default App;
