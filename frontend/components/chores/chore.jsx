import React from 'react';
import {List, ListItem} from 'material-ui/List';
import CommentContainer from '../comments/comment-container';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {presets} from 'react-motion';
import Collapse from 'react-collapse';
import Divider from 'material-ui/Divider';
import GroupCommentContainer from '../comments/group-comment-container';
import moment from 'moment';
moment().format();

class Chore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowComment: false,
      shouldShowForChore: false,
    };
    this.handleDestroy = this.handleDestroy.bind(this);
    this.highlight = this.highlight.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
    this.dashboard = this.dashboard.bind(this);
    this.printChoreStatement = this.printChoreStatement.bind(this);
  }

  toggleComment(e) {
    this.setState({
      shouldShowComment: !this.state.shouldShowComment,
    });
  }

  toggleForChore() {
    this.setState({
      shouldShowForChore: !this.state.shouldShowForChore
    });
  }

  handleDestroy(id) {
    return e => {
      e.stopPropagation();
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
  dashboard(chore) {
    if (this.props.dashboard) {
      return <CommentContainer chore={chore} comments={this.props.comments}/>;
    } else {
      return <GroupCommentContainer chore={chore} comments={this.props.comments}/>;
    }
  }

  completeDismissButton(chore) {
    if (this.state.shouldShowForChore) {
      if (chore.complete) {
        return <div className="dismiss-button">
                  <a onClick={this.handleDestroy(chore.id)}>Dismiss</a>
               </div>;
        } else {
          return <div className="complete-button">
            <a onClick={this.handleDestroy(chore.id)}>forChore</a>
          </div>;
          }
    } else {
      if (chore.complete) {
        return <div className="dismiss-complete-button-inactive">Completed</div>;
      } else {
        return <div className="dismiss-complete-button-inactive">In Progress</div>;
      }
    }
  }

  printChoreStatement(chore, ago) {
    let task = chore.task;
    let action = '';
    let housemate = '';
    if (this.props.dashboard) {
      housemate = "You";
      action = ' need to ';
    } else {
      housemate = this.props.housemates[chore.user_id].username;
      action = ' needs to ';
    }
    if (chore.complete) {
      return (housemate + ' completed ' +
      task + ' ' + ago);
    } else {
      return (housemate + action +
      task + ' '
      + ago);
    }
  }
  render() {
    let chore = this.props.chore;
    let ago = moment(chore.complete_by).fromNow();
    if (chore.complete) {
      ago = moment(chore.updated_at).fromNow();
    }
    return (
        <div className="chore" key={chore.id}>
            <ListItem
              className={chore.complete ? "" :this.highlight(ago)}
              onClick={this.toggleComment}
              onMouseEnter={() => this.setState({["shouldShowForChore"]: true})}
              onMouseLeave={() => this.setState({["shouldShowForChore"]: false})}
              >
              <div className="chore-container">
                <div>
                  {this.printChoreStatement(chore, ago)}
                </div>
                {this.completeDismissButton(chore, ago)}
              </div>
            </ListItem>

          <Divider/>
          <div>
            <Collapse isOpened={this.state.shouldShowComment}>
              {this.dashboard(chore)}
            </Collapse>
          </div>
        </div>
    );
  }
}


export default Chore;
