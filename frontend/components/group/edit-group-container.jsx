import { connect } from 'react-redux';
import EditGroup from './edit-group';
import { createAGroup, receiveErrors, fetchAGroup } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.user.users,
  errors: state.group.errors,
  title: state.group.title,
  groups: state.user.groups,
  housemates: state.group.housemates
});

const mapDispatchToProps = dispatch => ({
  createAGroup: group => dispatch(createAGroup(group)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAGroup: id => dispatch(fetchAGroup(id)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGroup);
