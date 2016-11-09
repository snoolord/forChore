import { connect } from 'react-redux';
import Comment from './comment';

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  null
)(Comment);
