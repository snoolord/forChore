
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
              <a
                className="groups"
                >
                <div>
                  groups
                </div>

                <Link to="/dashboard/create_groups"
                 className="group-create-link"
                  >
                  +
                </Link>
              </a>
            </li>
          </ul>
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
