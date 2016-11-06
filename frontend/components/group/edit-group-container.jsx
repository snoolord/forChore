import { connect } from 'react-redux';
import EditGroup from './edit-group';
import { createAGroup, receiveErrors } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.user.users,
  errors: state.group.errors
});

const mapDispatchToProps = dispatch => ({
  createAGroup: group => dispatch(createAGroup(group)),
  fetchUsers: () => dispatch(fetchUsers()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGroup);
