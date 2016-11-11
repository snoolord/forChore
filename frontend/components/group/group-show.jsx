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
import moment from 'moment';
moment().format();

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowComment: false
    };
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
          </h2>
          <CreateChoreContainer state={this.props}/>
            <List>
              <div
                className="chore-columns">
                <div>
                  To Complete!
                </div>
                <div className="due-date">
                  Due Date
                </div>
                <div className="completed-yet">
                  Completed?
                </div>
              </div>
              <Divider/>
              {currentChores.map((chore) => {
                return this.currentChore(chore);
              })}
              completed
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
