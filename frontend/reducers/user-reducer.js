import {
  RECEIVE_USER_GROUPS,
  RECEIVE_USERS
} from '../actions/user_actions';

import merge from 'lodash/merge';

const _defaultState = {
  users: {},
  groups: {}
};

const UserReducer = function( state = _defaultState, action ) {
  console.log("hello from the reducer");
  switch(action.type) {
    case RECEIVE_USER_GROUPS:
      return merge({}, state, action.groups);
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default UserReducer;
