import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Header from './header';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location } ) =>   {

  const path = location.pathname.slice(1);



};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
