
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
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
        className="center-container"
        >
        <div
          className="sidebar"
          >
          <ul
            className="sidebar-ul"
            >
            <li>
              <Link to="/dashboard/myChores">
                <FlatButton
                  id="my-chores"
                  className="sidebar-button"
                  >
                  myChores
                </FlatButton>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/recent_activity">
                <FlatButton
                  className="sidebar-button"
                  >
                  recentActivity
                </FlatButton>
              </Link>
            </li>
            <li>
              <div
                className="groups"
                >
                <div>
                  groups
                </div>

                <Link to="/create_group"
                 className="group-create-link"
                  >
                  +
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {this.props.children}
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
