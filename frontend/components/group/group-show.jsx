import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import CreateChoreContainer from './create-chore-container';
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
     return(
      <div className="group-show">
        <div className="group-show-center">
          <h2>{this.props.title}</h2>
          <CreateChoreContainer state={this.props}/>
        </div>
      </div>
    );
  }
}

export default GroupShow;
