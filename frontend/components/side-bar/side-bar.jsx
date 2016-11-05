
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Link, withRouter } from 'react-router';
import values from 'lodash/values';

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.renderCenter = this.renderCenter.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserGroups();
  }
  //
  groupLinks() {
    // this.props.groups.forEach( (group) => {
    //   this.groupLink(group.title, group.id);
    // });
    this.props.groups.map( (group) => {
      this.groupLink(group.title, group.id);
    });
  }

  groupLink(groupName, groupId) {
    return (
      <li key={groupId}>
          <Link to={`/dashboard/groups/${groupId}`}>
            <FlatButton
              className="sidebar-button"
              >
              {groupName}
            </FlatButton>
          </Link>
      </li>
    );
  }

  renderCenter() {
    if (this.props.location.pathname === '/dashboard') {
      return <div className="group-show">
        <div className="group-show-center">
        </div>
        </div>;
    } else {
      return this.props.children;
    }
  }
  housemate(housemate) {
    if (this.props.location.pathname === '/dashboard'){
      return <li></li>;
    } else if (this.props.location.pathname.includes('groups/')){
      return <li key={housemate.username}>{housemate.username}</li>;
    }
  }

  render() {
    let housemates = values(this.props.housemates);
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
            {this.props.groups.slice(0,5).map( (group) => {
              return this.groupLink(group.title, group.id);
            })}
          </ul>
        </div>
        {this.renderCenter()}
        <div className="right-sidebar">
          <ul>
            {housemates.map((housemate) => {
              return this.housemate(housemate);
            })}
          </ul>
        </div>
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
