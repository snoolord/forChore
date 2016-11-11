
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Link, withRouter } from 'react-router';
import values from 'lodash/values';

import GroupLinkContainer from './group-link-container';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grouping: -1,
      shouldShowDust: false
    };
    this.renderCenter = this.renderCenter.bind(this);
    this.editButton = this.editButton.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.showDust = this.showDust.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserGroups();
  }

  // groupLinks() {
  //   // this.props.groups.forEach( (group) => {
  //   //   this.groupLink(group.title, group.id);
  //   // });
  //   this.props.groups.map( (group) => {
  //     this.groupLink(group.title, group.id);
  //   });
  // }

  groupLink(groupName, groupId) {
    return (
      <GroupLinkContainer key={groupId} groupName={groupName} groupId={groupId} />
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

  showDust() {
    if (this.props.location.pathname === "/dashboard/") {
      return <img src="http://i.imgur.com/EhwDa8N.png" className="dust"></img>;
    } else {
      return <div className="dust"></div>;
    }
  }


  filterBy(housemateId) {
    return e => {
      this.props.filterUser(housemateId);
    };
  }

  housemate(housemate) {
    if (this.props.location.pathname === '/dashboard'){
      return <div key={housemate.id}></div>;
    } else if (this.props.location.pathname.includes('groups/')){
      return <ListItem key={housemate.id}
                       primaryText={housemate.username}
                       onTouchTap={this.filterBy(housemate.id)}/>;
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
             <ListItem className="sidebar-link" leftIcon={this.showDust()} primaryText="yourChores" onTouchTap={this.handleTouch('/dashboard/')}/>
             <div className='groups'>
               <Subheader>yourGroups</Subheader>
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
