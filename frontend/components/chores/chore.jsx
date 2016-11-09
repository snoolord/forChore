import React from 'react';
import {List, ListItem} from 'material-ui/List';
import CommentContainer from '../comments/comment-container';

class Chore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowComment: false
    };

  }
}

export default Chore;
