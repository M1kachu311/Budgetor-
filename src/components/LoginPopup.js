import React, { Component } from 'react';
import './styles/loginPopup.css'

class LoginPopup extends Component {
  render() {

    return (
      <div className="logInPopupStyle loginPopupDisplay">
        <div className="inputsStyle">
            <div>
                <label htmlFor="fullname"/>
                <div className="inputAndTextStyle">
                    <input className="input" type="text" id="fullname" placeholder="Type your full name"></input>
                    <p>Please enter your first and last name</p>
                </div>
            </div>
            <div>
                <label htmlFor="userName"/>
                <div className="inputAndTextStyle">
                    <input className="input" type="text" id="userName" placeholder="Pick up a username"></input>
                    <p>Please choose a username</p>
                </div>
            </div>
            <div>
                <label htmlFor="userPass"/>
                <div className="inputAndTextStyle">
                    <input className="input" type="password" id="userPass" placeholder="Choose a password"></input>
                    <p>Please choose a password</p>
                </div>
            </div>
            <div>
                <label htmlFor="email"/>
                <div className="inputAndTextStyle">
                    <input style={{marginBottom: "0px"}} className="input" type="email" id="email" placeholder="Enter your email"></input>
                    <p>Please enter your email</p>
                </div>
            </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default LoginPopup;