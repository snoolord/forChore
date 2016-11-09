import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import CreateChoreContainer from './create-chore-container';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import values from 'lodash/values';
import moment from 'moment';
moment().format();
// todo: NEED TO CHANGE TO CREATE CHORE CONTAINER

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.highlight = this.highlight.bind(this);
  }

  handleDestroy(id) {
    return e => {
      this.props.completeChore(id);
    };
  }

  handleOpen(){
   this.setState({open: true});
  }

  handleClose(){
    this.setState({open: false});
  }
  highlight(daysAgo) {
    let reg = /[0-9]/g;
    let days = daysAgo.match(reg);

    if (days === null) {
      days = 0;
    } else if (daysAgo.includes("minutes") || daysAgo.includes("hours")) {
      days = 1;
    } else {
      days = days.join('');
    }

    if (days < 3) {
      return "red";
    } else if (days >2 && days < 5){
      return "yellow";
    } else {
      return "";
    }
  }

  currentChore(chore) {
    let ago = moment(chore.complete_by).fromNow();
    return (
        <div key={chore.id}>
          <ListItem
            primaryText={chore.task}
            className={this.highlight(ago)}
            rightIcon={<button onClick={this.handleDestroy(chore.id)}>x</button>}>
            <div>
              {ago}
            </div>
          </ListItem>
        </div>
         );
  }

  completedChore(chore) {
    return <ListItem key={chore.id} primaryText={chore.task}><div>{}</div></ListItem>;
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
