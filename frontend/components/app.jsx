import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { logout } from '../actions/session_actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  logo() {
    return (
      <Link to="/"><FlatButton className="logo-button">forChore</FlatButton></Link>
    );
  }
  headerLinks() {
    let path = this.props.location.pathname.slice(1);
    if (path === "") {
      return (
        <nav>
          <Link to="/login" className="current"><FlatButton className="login-signup">Login</FlatButton></Link>
          <Link to="/signup" className="current"><FlatButton className="login-signup">Sign Up</FlatButton></Link>
        </nav>
      );
    } else if (path === "login"){
      return (
        <nav>
          <Link to="/signup" className="current"><FlatButton className="login-signup">Sign Up</FlatButton></Link>
        </nav>
      );
    } else if (path === "signup") {
      return (
        <nav>
          <Link to="/login" className="current"><FlatButton className="login-signup">Login</FlatButton></Link>
        </nav>
      );
    }
  }

  render() {
    return (<MuiThemeProvider>
      <div className="main">
        <header>
          <AppBar
            iconElementLeft={this.logo()}
            iconElementRight={this.headerLinks()}
            >
          </AppBar>
        </header>
        {this.props.children}
      </div>
    </MuiThemeProvider>);
  }
}

export default App;
