import React, { Component } from 'react';
import './styles/login.css'

class Login extends Component {
  render() {
    return (
      <div className="loginStyle tabletDisplay desktopDisplay">
        <div className="tabletDisplay2 desktopDisplay2 mobileDisplay">
          <div>
              <label htmlFor="userName"/>
              <input id="userName" placeholder="user name"></input>
          </div>
          <div>
              <label htmlFor="userPass"/>
              <input id="userPass" placeholder="password"></input>
          </div>
        </div>
        <button className="ui primary button tabletButtonDisplay mobileButtonDisplay">Log In</button>
      </div>
    );
  }
}

export default Login;