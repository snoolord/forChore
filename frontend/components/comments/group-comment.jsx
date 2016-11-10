import React from 'react';
import TextField from 'material-ui/TextField';
import { invert } from 'lodash';
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

  render(){
    return <div key={this.props.chore.id}>
      {this.props.comments.map((comment) => {
        return <div key={comment.id}>{`${this.props.housemates[comment.user_id].username} says ${comment.body}`}</div>;
      })}
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.comment}
          id={`comment+${this.props.chore.id}`}
          className="comment-field"
          hintText="Leave comment forChore"
          onChange={this.handleChange()}>

        </TextField>
      </form>
    </div>;
  }
}

export default GroupComment;
