import { connect } from 'react-redux';
import MyChore from './my-chore';
import { createChore } from '../../actions/chore_actions';

const mapStateToProps = (state) => {
  return {
    chores: state.user.chores,
    currentUser: state.session.currentUser.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChore: (chore) => dispatch(createChore(chore))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyChore);
