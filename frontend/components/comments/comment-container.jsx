import { connect } from 'react-redux';
import Comment from './comment';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    housemates: state.group.housemates,
    groupId: state.group.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment, groupId) => dispatch(createComment(comment, groupId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
