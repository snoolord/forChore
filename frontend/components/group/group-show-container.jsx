import { connect } from 'react-redux';
import GroupShow from './group-show';
import { fetchAGroup, receiveErrors } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';
import { completeChore } from '../../actions/chore_actions';
import { selectCurrentChores, selectCompletedChores } from '../../reducers/selectors/selector';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    users: state.user.users,
    title: state.group.title,
    housemates: state.group.housemates,
    housemateChores: state.group.housemateChores,
    currentChores: selectCurrentChores(state),
    completedChores: selectCompletedChores(state),
    state
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAGroup: id => dispatch(fetchAGroup(id)),
  completeChore: id => dispatch(completeChore(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
