import { connect } from 'react-redux';
import CreateGroup from './create-group';
import { createAGroup } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  createAGroup: group => dispatch(createAGroup(group)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroup);
