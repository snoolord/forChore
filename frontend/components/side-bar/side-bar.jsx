
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Link, withRouter } from 'react-router';
import values from 'lodash/values';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grouping: -1
    };
    this.renderCenter = this.renderCenter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.editButton = this.editButton.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserGroups();
  }

  groupLinks() {
    // this.props.groups.forEach( (group) => {
    //   this.groupLink(group.title, group.id);
    // });
    this.props.groups.map( (group) => {
      this.groupLink(group.title, group.id);
    });
  }

  handleDestroy(groupId) {
    return e => {
      this.props.leaveGroup(this.props.currentUserId, groupId);
      this.props.router.push('/dashboard/');
    };
  }

  groupLink(groupName, groupId) {
    return (
      <ListItem key={groupId} primaryText={groupName}
         rightIcon={<button onClick={this.handleDestroy(groupId)}>-</button>}
         onTouchTap={this.handleTouch('/dashboard/groups/' + groupId)}>
      </ListItem>
    );
    // <li key={groupId + groupName}>
    //   <Link to={`/dashboard/groups/${groupId}`}>
    //     <FlatButton
    //       className="sidebar-button"
    //       >
    //       {groupName}
    //     </FlatButton>
    //   </Link>
    //   <button onClick={this.handleDestroy(groupId)}>----</button>
    // </li>
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
      return <div key={housemate.id}></div>;
    } else if (this.props.location.pathname.includes('groups/')){
      return <ListItem key={housemate.id} primaryText={housemate.username}/>;
    }
  }

  editButton() {
    let path = this.props.location.pathname;
    if ( path === '/dashboard') {
      return <div
        className="edit-div"></div>;
    } else {
      let groupId = parseInt(path.slice(18));
      return <div
        className="edit-div">
        <ListItem primaryText="Edit" onTouchTap={this.handleTouch('/edit_group/' + groupId)}/>
      </div>;
    }
  }

  handleTouch(route) {
    return e => {
      this.props.router.push(route);
    };
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
          <List>
             <ListItem primaryText="myChores" onTouchTap={this.handleTouch('/dashboard/')}/>
             <ListItem primaryText="recentActivity" onTouchTap={this.handleTouch('dashboard/recentActivity')}/>
             <div className='groups'>
               <Subheader>groups</Subheader>
               <Link to="/create_group"
                className="group-create-link"
                 >
                 add+
               </Link>
             </div>
             <Divider />
             {this.props.groups.slice(0,5).map( (group) => {
               return this.groupLink(group.title, group.id);
             })}
           </List>
        </div>
        {this.renderCenter()}
        <div className="right-sidebar">
          <List>
            {housemates.map((housemate) => {
              return this.housemate(housemate);
            })}
            {this.editButton()}
          </List>
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
