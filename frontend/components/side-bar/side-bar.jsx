
import React from 'react';
import FlatButton from 'material-ui/flatbutton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Link, withRouter } from 'react-router';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loggedIn) {
      return (
        <div
          className="sidebar"
          open={true}
          >
          <Link to="/dashboard/creategroup">
            <FlatButton
              className="sidebar-button"
            >
              Create Group
            </FlatButton>

          </Link>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default SideBar;
