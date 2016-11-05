import { connect } from 'react-redux';
import GroupShow from './group-show';
import { fetchAGroup, receiveErrors } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.user.users,
  title: state.group.title,
  housemates: state.group.housemates
});

const mapDispatchToProps = dispatch => ({
  fetchAGroup: id => dispatch(fetchAGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
