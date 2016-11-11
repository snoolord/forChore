import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { withRouter } from 'react-router';

class GroupLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowLeaveButton: false
    };
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
  }

  showGroupDust(groupId) {
    if (this.props.location.pathname.includes(groupId)) {
      return <img src="https://i.imgur.com/EhwDa8N.png" className="dust"></img>;
    } else {
      return <div className="dust"></div>;
    }
  }


  handleDestroy(groupId) {
    return e => {
      this.props.leaveGroup(this.props.currentUserId, groupId);
      this.props.router.push('/dashboard/');
    };
  }

  handleTouch(route) {
    return e => {
      this.props.router.push(route);
    };
  }
  showDeleteButton(groupId) {
    if (this.state.shouldShowLeaveButton) {
      return <button onClick={this.handleDestroy(groupId)}>-</button>;
    } else {
      return <div></div>;
    }
  }
  render() {
    let groupId = this.props.groupId;
    let groupName = this.props.groupName;
    return (
      <ListItem key={groupId} primaryText={groupName}
        leftIcon={this.showGroupDust(groupId)}
        className="group-link sidebar-link"
        onMouseEnter={() => this.setState({["shouldShowLeaveButton"]: true})}
        onMouseLeave={() => this.setState({["shouldShowLeaveButton"]: false})}
        rightIcon={this.showDeleteButton(groupId)}
        onTouchTap={this.handleTouch('/dashboard/groups/' + groupId)}>
      </ListItem>
    );
  }
}

export default withRouter(GroupLink);
