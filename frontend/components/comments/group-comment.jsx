import React from 'react';
import TextField from 'material-ui/TextField';
import { invert } from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
moment().format();

class GroupComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange() {
    return e => {
      this.setState({["comment"]: e.currentTarget.value});
    };
  }

  handleSubmit(){
    let comment = { chore_id: this.props.chore.id,
        user_id: this.props.currentUser.id,
        body: this.state.comment };
    this.props.createComment(comment);
    this.setState({["comment"]: ''});
  }

  submitButton() {
    if (this.state.comment.length > 0) {
      return <RaisedButton
        className="submit-comment"
        type="submit">
        Submit
      </RaisedButton>;
    } else {
      return <div></div>;
    }
  }

  render(){
    return <div key={this.props.chore.id}>
      {this.props.comments.map((comment) => {
        let time = moment(comment.created_at).format('LT on ll');
        return <div className="comment-div" key={comment.id}>
          <div className="comment">
            {`${this.props.housemates[comment.user_id].username} says ${comment.body}`}
          </div>
          <div className="comment-time">
            {time}
          </div>
      </div>;
      })}
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.comment}
          id={`comment+${this.props.chore.id}`}
          className="comment-field"
          hintText="Leave comment forChore"
          onChange={this.handleChange()}>

        </TextField>
        {this.submitButton()}
      </form>
    </div>;
  }
}

export default GroupComment;
