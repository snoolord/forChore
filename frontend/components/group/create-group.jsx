import React from 'react';
import TextField from 'material-ui/textfield';
import RaisedButton from 'material-ui/raisedbutton';
class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      title: ""
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
        <form className="create-group-form">
          <div className="create-group-name">
            <TextField
              onChange={this.update("title")}
              hintText="123 Sesame Street">

            </TextField>
          </div>
          <RaisedButton type="submit">Save</RaisedButton>
        </form>
      </div>

    );
  }
}

export default CreateGroup;
