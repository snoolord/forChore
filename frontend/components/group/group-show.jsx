import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import CreateChoreContainer from './create-chore-container';
import {List, ListItem} from 'material-ui/List';

// todo: NEED TO CHANGE TO CREATE CHORE CONTAINER

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  handleOpen(){
   this.setState({open: true});
  }

  handleClose(){
    this.setState({open: false});
  }

  render() {
    let chores = [];
     if (this.props.chores) {
       chores = this.props.chores;
     }
     return(
      <div className="group-show">
        <div className="group-show-center">
          <h2>{this.props.title}</h2>
          <CreateChoreContainer state={this.props}/>
            <List>
              {chores.map((chore) => {
                return <ListItem key={chore.id}primaryText={chore.task}></ListItem>;
              })}
            </List>
        </div>
      </div>
    );
  }
}

export default GroupShow;
