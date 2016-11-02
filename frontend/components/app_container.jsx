import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import App from './app';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapDispatchToProps
)(App);
