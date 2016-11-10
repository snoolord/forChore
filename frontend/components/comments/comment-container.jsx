import { connect } from 'react-redux';
import Comment from './comment';
import { postMyComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    housemates: state.user.users,
    groupId: state.group.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(postMyComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
