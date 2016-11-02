import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router';
import theme from './theme';
import muiThemeable from 'material-ui/styles/muiThemeable';


const style = {

};

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
    );
  }
}

export default App;
