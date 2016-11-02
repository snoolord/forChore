import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  logo() {
    if (this.props.loggedIn) {
      return (
        <Link to="/dashboard"><FlatButton className="logo-button">forChore</FlatButton></Link>
      );
    } else {
      return (
        <Link to="/"><FlatButton className="logo-button">forChore</FlatButton></Link>
      );
    }
  }
  handleLogout() {
    this.props.dispatch(logout());
    this.props.router.push("/");
  }
  headerLinks() {
    let path = this.props.location.pathname.slice(1);
    if (path === "") {
      return (
        <nav>
          <Link to="/login" className="current"><FlatButton className="login-signup"
            textAlign: 'center'>Login</FlatButton></Link>
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
    } else {
      return (
        <nav>
          <FlatButton
            className="logout-button"
            onClick={this.handleLogout.bind(this)}
            >Logout</FlatButton>
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
