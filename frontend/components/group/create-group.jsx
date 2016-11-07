import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import values from 'lodash/values';
import FlatButton from 'material-ui/FlatButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { default as Fade } from 'react-fade';

const fadeDuration = 10;
class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      housemates: ["","","","",""],
      fieldName: "housemate-fields",
      created: false,
      clearClick: false
    };
    this.renderError = this.renderError.bind(this);
    this.memberUpdate = this.memberUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForEmptyHousemates = this.checkForEmptyHousemates.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleAddField = this.handleAddField.bind(this);
    this.addFieldButton = this.addFieldButton.bind(this);
    this.memberField = this.memberField.bind(this);
  }
  componentWillUnmount() {
    let errors = [];
    this.props.receiveErrors(errors);
  }
  componentDidMount() {
    // create get all users actions\
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
    let errors = ["","","","",""];
    housemates.forEach( (housemate, index) => {
      if (allUsers[housemate] && !filledOutUsers[housemate]){
        filledOutUsers[housemate] = allUsers[housemate];
      } else if (housemate === ""){

      } else {
        errors[index] = "Invalid user";
      }
    });
    if (errors.every((error) => {
      return error === "";
    })){
      let group = { creator_id: this.props.currentUser.id, title: this.state.title, housemate_ids: values(filledOutUsers) };
      this.props.createAGroup(group);
      this.setState({["created"]: true});
    } else {
      this.props.receiveErrors(errors);
    }
  }

  componentDidUpdate() {
    this.redirectIfCreated();
  }

  redirectIfCreated() {
    if (this.state.created) {
      this.props.router.push(`/dashboard`);
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
            onFocus={this.handleFocus}
            >
          </AutoComplete>
        </div>
      );
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
  render() {
    return (
      <div className="create-group">
        <div className="create-group-name">
          forChore
        </div>
        <div className="create-group-prompt">
          Start a new group!
        </div>
        <form className="create-group-form" onSubmit={this.handleSubmit}>
          <div className="create-group-name">
            <TextField
              onChange={this.update("title")}
              hintText="123 Sesame Street"
              >
            </TextField>

          </div>
          <div className="housemate-text-fields">
            {this.state.housemates.map((housemate, index) => {
              return this.memberField(housemate, index);
          })}
          </div>
          {this.addFieldButton()}
          <div className="group-save-button">
            <RaisedButton id="group-save-button" type="submit" disabled={this.state.title.length === 0 ? true : false}>Create Group</RaisedButton>
          </div>
        </form>
      </div>

    );
  }
}

export default CreateGroup;
