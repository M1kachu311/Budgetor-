import React, { Component } from 'react';
import './leftSide.css'

class LeftSide extends Component {
  render() {
    return (
      <div className="leftSideStyle">
        <div className="phraseStyle">
          <i className="far fa-folder-open"></i>
          <h2 className="leftSidePhrasesStyle upperPadding">Organize your expenses practicaly</h2>
        </div>
        <div className="phraseStyle">
          <i className="fas fa-thumbtack"></i>
          <h2 className="leftSidePhrasesStyle">Don't lose track of your budget</h2>
        </div>
        <div className="phraseStyle">
          <i className="fas fa-piggy-bank fa-flip-horizontal"></i>
          <h2 className="leftSidePhrasesStyle">Start saving your money right now</h2>
        </div>
      </div>
    );
  }
}
export default LeftSide;