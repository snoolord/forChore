import { connect } from 'react-redux';
import MyChore from './my-chore';
import { createChore } from '../../actions/chore_actions';
import { selectMyCurrentChores, selectMyCompletedChores } from '../../reducers/selectors/selector';
import { fetchUsers } from '../../actions/user_actions';
import { completeChore } from '../../actions/chore_actions';

const mapStateToProps = (state) => {
  return {
    chores: state.user.chores,
    currentUser: state.session.currentUser.username,
    currentChores: selectMyCurrentChores(state),
    completedChores: selectMyCompletedChores(state),
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    completeChore: id => dispatch(completeChore(id)),
    createChore: (chore) => dispatch(createChore(chore))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyChore);
