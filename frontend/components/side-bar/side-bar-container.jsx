import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchUserGroups } from '../../actions/user_actions';
import SideBar from './side-bar';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export default connect(
  mapStateToProps
)(SideBar);
