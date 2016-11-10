import { connect } from 'react-redux';
import GroupComment from './group-comment';
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
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupComment);
