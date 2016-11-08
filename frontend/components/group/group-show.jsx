import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import CreateChoreContainer from './create-chore-container';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import values from 'lodash/values';

// todo: NEED TO CHANGE TO CREATE CHORE CONTAINER

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleDestroy = this.handleDestroy.bind(this);
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

  render() {
    console.log(this.props);
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
          <h2>{this.props.title}</h2>
          <CreateChoreContainer state={this.props}/>
            <List>
              current
              {currentChores.map((chore) => {
                return <ListItem key={chore.id}primaryText={chore.task} rightIcon={<button onClick={this.handleDestroy(chore.id)}>x</button>}></ListItem>;
                })}
              <Divider/>
              completed
              {completedChores.map((chore) => {
                return <ListItem key={chore.id}primaryText={chore.task} rightIcon={<button onClick={this.handleDestroy(chore.id)}>x</button>}></ListItem>;
              })}
            </List>
        </div>
      </div>
    );
  }
}

export default GroupShow;
