import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import CreateChoreContainer from './create-chore-container';
import ChoreContainer from '../chores/chore-container';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import values from 'lodash/values';
import { withRouter } from 'react-router';
import moment from 'moment';
moment().format();

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowComment: false
    };
    this.handleTouch = this.handleTouch.bind(this);
    this.editButton = this.editButton.bind(this);
  }

  handleOpen(){
   this.setState({open: true});
  }

  handleClose(){
    this.setState({open: false});
  }


  currentChore(chore) {
    return <ChoreContainer key={chore.id} chore={chore} comments={chore.comments} dashboard={false}/>;
  }

  completedChore(chore) {
    return <ChoreContainer key={chore.id} chore={chore} comments={chore.comments} dashboard={false} />;
  }
  editButton() {
    let path = this.props.location.pathname;
    if ( path === '/dashboard/') {
      return <div
        className="edit-div"></div>;
    } else {
      let groupId = parseInt(path.slice(18));
      return <div
        className="edit-div">
        <ListItem primaryText="Edit Group" onTouchTap={this.handleTouch('/edit_group/' + groupId)}/>
      </div>;
    }
  }
  handleTouch(route) {
    return e => {
      this.props.router.push(route);
    };
  }
  render() {
    let currentChores = [];
    let completedChores = [];
    if (this.props.currentChores) {
      currentChores = this.props.currentChores;
    }
    if (this.props.completedChores) {
      completedChores = this.props.completedChores;
    }
    return(
      <div className="group-show">
        <div className="group-show-center">
          <h2 className="group-title">
            <div className="group-title-detail">{this.props.title}</div>
            {this.editButton()}
          </h2>
          <CreateChoreContainer state={this.props}/>
            <List>
              <div className="group-columns group-header-salmon">
                <div>
                  Current Chores
                </div>
                <div className="status">
                  Status
                </div>
              </div>
              <Divider/>
              {currentChores.map((chore) => {
                return this.currentChore(chore);
              })}
              {currentChores.length === 0
                ? <div className="empty-chores-text-group">
                  No chores right now!
                  </div>
              : <div></div>}
              <div className="group-columns group-header-blue">
                <div>
                  Completed Chores
                </div>
                <div className="status">
                  Status
                </div>
              </div>
              <Divider/>
              {completedChores.map((chore) => {
                return this.completedChore(chore);
              })}
            </List>
          </div>
        </div>
    );
  }
}
// let reg = /[0-9]/g;
// let days = ago.match(reg).join('');

// let ago = moment(chore.complete_by).fromNow();
// let className = '';
// console.log(ago);
export default GroupShow;
