import React from 'react';
import { Link, withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import {grey500, blue500} from 'material-ui/styles/colors';

class Header extends React.Component {
  constructor(props) {
    super(props);
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
    this.props.logout();
    this.props.router.push("/");
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
    } else {
      return (
        <nav>
          <FlatButton
            className="logout-signup"
            id="logout-button"
            onClick={this.handleLogout.bind(this)}
            style={{verticalAlign: 'middle'}}
            >Logout</FlatButton>
        </nav>
      );
    }
  }

  render() {
    return (
        <header>
          <nav
            className="main-full-header"
            >
            <nav
              className="main-header"
              >
              <div className="icon-spacing">
                {this.logo()}
                {this.headerLinks()}
              </div>
            </nav>
          </nav>
        </header>
    );
  }
}

export default Header;
