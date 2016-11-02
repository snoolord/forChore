import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SideBar from './side-bar';


export default connect()(SideBar);
