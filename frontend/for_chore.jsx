import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as Api from './util/session_api_util';
import configureStore from './store/store';
import * as Actions from './actions/session_actions';
import * as GroupApi from './util/group_api_util';

window.createGroup = GroupApi.createGroup;
window.fetchGroup = GroupApi.fetchGroup;   

window.signup = Actions.signup;
window.login = Actions.login;
window.logout = Actions.logout;


document.addEventListener('DOMContentLoaded', () => {
let store;
if (window.currentUser) {
  const preloadedState = {session: {currentUser: window.currentUser}};
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
});
