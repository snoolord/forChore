import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import {withRouter} from 'react-router';
/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
class CreateChore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      housemate: '',

    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.state = {
      open: false
    };
  }
  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }
  handleOpen(e) {
    e.preventDefault();
    console.log(new Date());
    this.setState({open: true});
  }

  handleClose(e)  {
    e.preventDefault();
    this.setState({open: false});
  }

  render() {
    console.log(this.props);
    let housemates = this.props.housemates;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Add Chore"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen} />
        <Dialog
          title="Add Chore"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <SelectField
          onChange={this.update("housemate")}
          hintText="Housemate"
          >
        </SelectField>
          Complete By
          <DatePicker hintText="Date Picker" />
        </Dialog>
      </div>
    );
  }

}

export default withRouter(CreateChore);
