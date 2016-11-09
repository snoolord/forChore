import { connect } from 'react-redux';
import Comment from './comment';
import createComment from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    state
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
)(Comment);
