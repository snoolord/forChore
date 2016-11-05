import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session-form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location } ) =>   {
  const path = location.pathname.slice(1);
  let processForm = '';
  if (path === 'login'){
    processForm = login;
  } else {
    processForm = signup;
  }

  return {
    login: user => dispatch(login(user)),
    processForm: user => dispatch(processForm(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    path
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
