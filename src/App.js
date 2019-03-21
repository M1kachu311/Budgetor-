import React, { Component } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
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
        <div className="App">
          <UserArea />
        </div>
      ); 
    }
  }
}

export default App;
