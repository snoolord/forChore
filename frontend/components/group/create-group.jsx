import React from 'react';
import TextField from 'material-ui/textfield';
import RaisedButton from 'material-ui/raisedbutton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { default as Fade } from 'react-fade';

const fadeDuration = 10;
class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      title: "",
      housemates: [],
      fieldName: "housemate-fields"
    };
    this.memberUpdate = this.memberUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // create get all users actions\

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

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);


  }
  fadeIn() {

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
            <RaisedButton id="group-save-button" type="submit">Create Group</RaisedButton>
          </div>
        </form>
      </div>

    );
  }
}

export default CreateGroup;
