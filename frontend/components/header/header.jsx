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
  sessionLinks() {
    if (this.props.path === 'signup') {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current"><FlatButton>Login</FlatButton></Link>
        </nav>
      );
    }
    else if (this.props.path === 'login'){
      return (
        <nav className="login-signup">
          <Link to="/signup" activeClassName="current"><FlatButton>Sign Up</FlatButton></Link>
        </nav>
      );
    } else {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current"><FlatButton>Login</FlatButton></Link>
          <Link to="/signup" activeClassName="current"><FlatButton>Sign Up</FlatButton></Link>
        </nav>
      );
    }
  }

  render() {
    return (<AppBar
      showMenuIconButton={false}
      iconElementLeft={this.sessionLinks()}
      title="forChore"
      ></AppBar>);
  }
}

export default Header;
