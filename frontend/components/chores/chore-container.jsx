import { connect } from 'react-redux';
import Chore from './chore';
import { fetchAGroup, receiveErrors } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';
import { completeChore } from '../../actions/chore_actions';
import { selectCurrentChores, selectCompletedChores } from '../../reducers/selectors/selector';
import { filterUser } from '../../actions/filter_actions';

const mapDispatchToProps = dispatch => ({
  fetchAGroup: id => dispatch(fetchAGroup(id)),
  completeChore: id => dispatch(completeChore(id)),
  filterUser: (id) => dispatch(filterUser(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Chore);
