import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchUserGroups } from '../../actions/user_actions';
import GroupLink from './group-link';
import { createAGroup, fetchAndDeleteGrouping, leaveGroup } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';
import { filterUser } from '../../actions/filter_actions';


const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUser.id,
    groups: state.user.groups,
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserGroups: () => dispatch(fetchUserGroups()),
    leaveGroup: (userId, groupId) => dispatch(leaveGroup(userId, groupId)),
    filterUser: (id) => dispatch(filterUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupLink);
