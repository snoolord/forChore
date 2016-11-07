import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class CreateChore extends React.Component {
  contructor(props) {
    this.state = {
      open: false
    };
    console.log("does this hit");
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.state = {
      open: false
    };
  }
  handleOpen() {
    return e => {
      console.log("opening");
    };
  }

  handleClose()  {
    return e => {
      console.log("closing");
    };
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    if (this.state) {
      return (
        <div>
          <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen.bind(this)} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}
