import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const sessionLinks = (currentUser) => {
  if (currentUser) {
    return (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current"><FlatButton>Login</FlatButton></Link>
        </nav>
      );
    }
  else {
    return (
      <nav className="login-signup">
        <Link to="/signup" activeClassName="current"><FlatButton>Sign Up</FlatButton></Link>
      </nav>
    );
  }
};

const personalGreeting = (currentUser, logout) => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
