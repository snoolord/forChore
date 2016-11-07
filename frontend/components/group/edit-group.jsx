import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import values from 'lodash/values';
import FlatButton from 'material-ui/FlatButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { default as Fade } from 'react-fade';

const fadeDuration = 10;
class EditGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      housemates: [],
      fieldName: "housemate-fields-active",
      updated: false,
      clearClick: false
    };
    this.renderError = this.renderError.bind(this);
    this.memberUpdate = this.memberUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForEmptyHousemates = this.checkForEmptyHousemates.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.memberField = this.memberField.bind(this);
    this.handleAddField = this.handleAddField.bind(this);
    this.addFieldButton = this.addFieldButton.bind(this);
  }
  componentWillUnmount() {
    let errors = [];
    this.props.receiveErrors(errors);
  }


  componentWillReceiveProps() {
    this.state.title = this.props.title;

    let vals = values(this.props.housemates);
    let housematesUsernames = [];
    vals.forEach((object) => {
      housematesUsernames.push(object.username);
    });
    this.state.housemates = housematesUsernames;
  }
  componentDidMount() {
    // create get all users actions\
    this.props.fetchAGroup(this.props.routeParams.groupId);
    this.props.fetchUsers();
  }
  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value}, () =>{
        if (this.state.title.length > 0 ) {
          this.setState({fieldName: "housemate-fields-active"});
        } else {
          this.setState({fieldName: "housemate-fields"});
        }
      });
    };
  }

  memberUpdate(housemateIndex) {
    return e => {
      let housemates = this.state.housemates;
      housemates[housemateIndex] = e;
      this.setState({'housemates': housemates});
    };
  }

  checkForEmptyHousemates() {
    let housemates = this.state.housemates;
    let emptyCount = 0;
    housemates.forEach( (housemate) => {
      if (housemate.length === 0) {
        emptyCount ++;
      }
    });
    if (emptyCount === 5) {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let allUsers = this.props.users;
    let filledOutUsers = { [this.props.currentUser.username]: this.props.currentUser.id };
    let housemates = this.state.housemates;
    let errors = [];
    housemates.forEach( (housemate, index) => {
      if (allUsers[housemate] && !filledOutUsers[housemate]){
        filledOutUsers[housemate] = allUsers[housemate];
      } else if (housemate === "") {

      } else if (housemate === this.props.currentUser.username){

      } else {
        errors[index] = "Invalid User";
      }
    });
    if (errors.every((error) => {
      return error === "";
    })){
      let group = { title: this.state.title, housemate_ids: values(filledOutUsers)};
      let groupId = parseInt(this.props.routeParams.groupId);
      this.props.editGroup(groupId, group);
      this.setState({["updated"]: true});
    } else {
      this.props.receiveErrors(errors);
    }
  }

  componentDidUpdate() {
    this.redirectIfUpdated();
  }

  redirectIfUpdated() {
    console.log(this.props.routeParams.groupId);
    if (this.state.updated) {
      this.props.router.push('/dashboard/groups/'+this.props.routeParams.groupId);
    }
  }

  renderError(fieldIndex) {
    if (this.props.errors[fieldIndex]){
      return this.props.errors[fieldIndex];
    } else {
      return '';
    }
  }

  handleFocus(e) {
    let fieldIndex = -1;
    this.state.housemates.forEach( (housemate, index) => {
      if (e.currentTarget.value === housemate) {
        fieldIndex = index;
      }
    });
    let errors = this.props.errors;
    if (errors.length === 5) {
      errors[fieldIndex] = '';
      this.props.receiveErrors(errors);
    }
  }

  handleAddField() {
    return e => {
      e.preventDefault();
      let housemates = this.state.housemates;
      housemates.push("");
      this.setState({'housemates': housemates});
    };
  }

  addFieldButton() {
    if (this.state.title.length !== 0 ) {
      return <div className="field-button">
        <button onClick={this.handleAddField()}>+</button>
      </div>;
    } else {
      return <div className="field-button"></div>;
    }
  }
  memberField(housemate, memberIndex) {
    let users = Object.keys(this.props.users);
    if (housemate === this.props.currentUser.username){
      return <div key={memberIndex}></div>;
    } else {
      return (
        <div className={this.state.fieldName} key={memberIndex}>
          <AutoComplete
            className="housemate-field"
            hintText={`Housemate ${memberIndex+1}`}
            dataSource={users}
            errorText={this.renderError(memberIndex)}
            filter={AutoComplete.fuzzyFilter}
            searchText={housemate}
            onUpdateInput={this.memberUpdate(memberIndex)}
            onNewRequest={this.memberUpdate(memberIndex)}
            onFocus={this.handleFocus}>
          </AutoComplete>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="edit-group">
        <div className="edit-group-name">
          forChore
        </div>
        <div className="edit-group-prompt">
          Update your group!
        </div>
        <form className="edit-group-form" onSubmit={this.handleSubmit}>
          <div className="edit-group-name">
            <TextField
              onChange={this.update("title")}
              hintText="123 Sesame Street"
              value={this.state.title}>
            </TextField>

          </div>
          {this.state.housemates.map((housemate, index) => {
            return this.memberField(housemate, index);
          })}
          {this.addFieldButton()}
          <div className="update-group-button">
            <RaisedButton id="update-group-button" type="submit" disabled={this.state.title.length === 0 ? true : false}>Update Group</RaisedButton>
          </div>
        </form>
      </div>

    );
  }
}

export default EditGroup;
