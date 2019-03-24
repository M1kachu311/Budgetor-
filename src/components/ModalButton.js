import React, { Component } from 'react';
import './styles/modalButton.css';
import LoginPopup from './LoginPopup';

export class ModalButton extends Component {

  state = { activate: false }

  openSignupForm = () => this.setState({ activate: true })

  cancelSignUp = () => this.setState({ activate: false })

  render() {
    if(this.state.activate === true) {
      return (
        <div>
          <button onClick={this.openSignupForm} className="ui primary button">Sign Up for Free Today</button>
          <LoginPopup>
            <div className="buttonsStyle">
              <button onClick={this.cancelSignUp} className="ui primary button">Cancel</button>
              <button className="ui red button">Sign Up</button>
            </div>
          </LoginPopup>
        </div>
      )
    } else { 
      return <button onClick={this.openSignupForm} className="ui primary button">Sign Up for Free Today</button>
    }
    
  }
}

export default ModalButton
