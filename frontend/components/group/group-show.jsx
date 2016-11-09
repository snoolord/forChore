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
    return <ChoreContainer key={chore.id} chore={chore} />;
  }

  completedChore(chore) {
    return <ChoreContainer key={chore.id} chore={chore} />;
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
          <h2>
            {this.props.title}
          </h2>
          <CreateChoreContainer state={this.props}/>
            <List>
              current
              {currentChores.map((chore) => {
                return this.currentChore(chore);
              })}
              <Divider/>
              completed
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
