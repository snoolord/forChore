import React from 'react';
import {List, ListItem} from 'material-ui/List';
import CommentContainer from '../comments/comment-container';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {presets} from 'react-motion';
import Collapse from 'react-collapse';
moment().format();

class Chore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowComment: false
    };
    this.handleDestroy = this.handleDestroy.bind(this);
    this.highlight = this.highlight.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
  }

  toggleComment() {
    this.setState({
      shouldShowComment: !this.state.shouldShowComment
    });
  }
  handleDestroy(id) {
    return e => {
      this.props.completeChore(id);
    };
  }

  highlight(daysAgo) {
    let reg = /[0-9]/g;
    let days = daysAgo.match(reg);

    if (days === null) {
      days = 0;
    } else if (daysAgo.includes("minutes") || daysAgo.includes("hours")) {
      days = 1;
    } else {
      days = days.join('');
    }

    if (days < 3) {
      return "red";
    } else if (days >2 && days < 5){
      return "yellow";
    } else {
      return "";
    }
  }

  render() {
    console.log(this.props);
    let chore = this.props.chore;
    let ago = moment(chore.complete_by).fromNow();
    return (
        <div key={chore.id}>
          <ListItem
            primaryText={chore.task}
            className={chore.complete ? "" :this.highlight(ago)}
            onTouchTap={this.toggleComment}
            rightIcon={chore.complete ? <div></div> : <button onClick={this.handleDestroy(chore.id)}>x</button>}>
            <div>
              {ago}
            </div>
          </ListItem>
          <div>
            <Collapse isOpened={this.state.shouldShowComment}>
              <CommentContainer />
            </Collapse>
          </div>
        </div>
    );
  }
}


export default Chore;
