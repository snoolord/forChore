import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import values from 'lodash/values';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { default as Fade } from 'react-fade';

const fadeDuration = 10;
class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      housemates: [],
      fieldName: "housemate-fields",
      created: false
    };
    this.memberUpdate = this.memberUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForEmptyHousemates = this.checkForEmptyHousemates.bind(this);
  }
  componentDidMount() {
    // create get all users actions\
    this.props.fetchUsers();
    console.log(this.props);
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
      housemates[housemateIndex] = e.currentTarget.value;
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
    let filledOutUsers = [this.props.currentUser.id];
    let housemates = this.state.housemates;
    housemates.forEach( (housemate) => {
      if (Object.keys(allUsers).includes(housemate) && !filledOutUsers.includes(allUsers[housemate])){
        filledOutUsers.push(allUsers[housemate]);
      }
    });
    let group = { creator_id: this.props.currentUser.id, title: this.state.title, housemate_ids: filledOutUsers};
    this.props.createAGroup(group);
    this.setState({["created"]: true});
  }

  componentDidUpdate() {
    this.redirectIfCreated();
  }

  redirectIfCreated() {
    if (this.state.created) {
      this.props.router.push(`/dashboard`);
    }
  }
  memberField() {
      return (
        <div className={this.state.fieldName}>
             <TextField
               className="housemate-field"
               hintText={`Housemate 1`}
               onChange={this.memberUpdate(0)}>
             </TextField>
             <TextField
               className="housemate-field"
               hintText={`Housemate 2`}
               onChange={this.memberUpdate(1)}>
             </TextField>
             <TextField
               className="housemate-field"
               hintText={`Housemate 3`}
               onChange={this.memberUpdate(2)}>
             </TextField>
             <TextField
               className="housemate-field"
               hintText={`Housemate 4`}
               onChange={this.memberUpdate(3)}>
             </TextField>
             <TextField
               className="housemate-field"
               hintText={`Housemate 5`}
               onChange={this.memberUpdate(4)}>
             </TextField>

        </div>
      );
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
              hintText="123 Sesame Street">
            </TextField>

          </div>
          {this.memberField()}
          <div className="group-save-button">
            <RaisedButton id="group-save-button" type="submit" disabled={this.state.title.length === 0 ? true : false}>Create Group</RaisedButton>
          </div>
        </form>
      </div>

    );
  }
}

export default CreateGroup;
