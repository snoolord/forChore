import React from 'react';
import FlatButton from 'material-ui/';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
          <RaisedButton label="Add Chore" onTouchTap={this.handleOpen} />
        </div>
      </div>
    );
  }
}

export default GroupShow;
