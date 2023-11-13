import React, { useState } from "react";
import "./LoginFormStyles.css";
import user_icon from './Assets/NicknameEmoji.svg';
import password_icon from './Assets/Password-Icon.svg'

const LoginForm = () => {

  // const [usernameError, setUsernameError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Function to simulate an error for testing purposes
  const simulateError = () => {
    setPasswordError(true);
  };

  return (
    <div className="container">
      <div className="loginWrapper">
        <div className="header">
          Login
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder='Enter your username' />
            <img id='loginIcon' src={user_icon} alt="" draggable="false" />
          </div>
          {usernameError ? (
            <div className="errorMessage">Username or password is incorrect</div>
          ) : (
            <div className="errorMessage invisible">Placeholder</div>
          )}
          <div className="input">
            <input type="password" placeholder='Enter your password' />
            <img id='loginIcon' src={password_icon} alt="" draggable="false" />
          </div>
          {passwordError ? (
            <div className="errorMessage">Username or password is incorrect</div>
          ) : (
            <div className="errorMessage invisible">Placeholder</div>
          )}
        </div>
        <div className="submit" onClick={simulateError}>Login</div>
      </div>
    </div>
  );
};

export default LoginForm;


