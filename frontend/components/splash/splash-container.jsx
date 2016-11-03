import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
