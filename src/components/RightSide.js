import React, { Component } from 'react';
import './rightSide.css';
import Login from './Login';
import ModalButton from './ModalButton';


class RightSide extends Component {
  render() {
    return (
      <div className="rightSideMargin">
        <Login />
        <div className="rigthSideStyle">
          <p className="p">
          Haven't yet registered? 
          It's never too early to start structuring your lifestyle.
          Start Right away and your way to welth is set.
          </p>
          <ModalButton />
        </div>
      </div>
    );
  }
}

export default RightSide;