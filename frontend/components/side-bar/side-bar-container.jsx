import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchUserGroups } from '../../actions/user_actions';
import SideBar from './side-bar';
import { createAGroup } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  groups: state.user.groups,
  housemates: state.group.housemates
});

const mapDispatchToProps = dispatch => ({
  fetchUserGroups: () => dispatch(fetchUserGroups())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
