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
  render() {
    return (<AppBar
      showMenuIconButton={false}
      iconElementLeft={this.sessionLinks()}
      title="forChore"
      ></AppBar>);
  }
}

export default Header;
