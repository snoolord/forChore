import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import {withRouter} from 'react-router';
import values from 'lodash/values';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */

 const styles = {
  customWidth: {
    width: 150,
  },
};

class CreateChore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      housemate: {},
      date: null,
      chore: ''
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.upDate = this.upDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  update(field) {
    return (e, index, value) => {
      this.setState({[field]: value});
    };
  }

  updateChore() {
    return (e) => {
      this.setState({chore: e.currentTarget.value});
    };
  }
  upDate(e, date) {
    this.setState({date: date});
  }
  handleOpen(e) {
    e.preventDefault();
    this.setState({open: true});
  }

  handleClose(e)  {
    this.setState({open: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    let chore = {};
    let userId = this.state.housemate.id;
    chore.user_id = userId;
    chore.group_id = parseInt(this.props.params.id);
    chore.task = this.state.chore;
    chore.complete_by = this.state.date;
    this.props.createChore(chore);
    this.props.fetchAGroup(chore.group_id);
    this.setState({open: false, date: null});
  }

  disablePastDates(date) {
    return date <= new Date;
  }

  removeFilter() {
    this.props.filterUser(0);
  }

  render() {
    let housemates = [];
    if (this.props.housemates) {
      values(this.props.housemates).forEach((housemate, index)=> {
        if (this.props.currentUser.username !== housemate) {
          housemates.push(<MenuItem key={housemate+index}
                          value={housemate}
                          primaryText={housemate.username}></MenuItem>)  ;
        }
      });
    }
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
        onTouchTap={this.handleSubmit}
      />,
    ];
    let filter = 0;
    if (this.props.filter) {
      filter = this.props.filter.id;
    }
    return (
      <div>
        <div className="add-chore">
          <RaisedButton onTouchTap={this.handleOpen}>Add Chore</RaisedButton>
        </div>
        <div className="create-chore" onSubmit={this.handleSubmit}>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            <div className="create-chore-form">
              <div className="drop-down clearfix">
                <DropDownMenu
                  style={styles.customWidth}
                  value={this.state.housemate}
                  className="drop-down-menu"
                  onChange={this.update("housemate")}
                  >
                  {housemates}
                </DropDownMenu>
                <div className="drop-down-text">needs to</div>
              </div>
              <div className="task">
                <TextField
                  onChange={this.updateChore()}
                  hintText="take out the trash"
                  >
                </TextField>
              </div>
              <div className="date-picker">
                <div className="complete-by-text">by</div>
                <DatePicker hintText="this date"
                  className="date-field"
                  value={this.state.date}
                  onChange={this.upDate}
                  shouldDisableDate={this.disablePastDates}
                  textFieldStyle={{width: 100}}
                  />
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    );
  }

}

export default withRouter(CreateChore);
