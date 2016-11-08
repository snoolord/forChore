import {
  RECEIVE_USER_GROUPS,
  RECEIVE_USERS
} from '../actions/user_actions';

import merge from 'lodash/merge';

const _defaultState = {
  users: {},
  groups: [],
  chores: []
};

const UserReducer = function( state = _defaultState, action ) {
  switch(action.type) {
    case RECEIVE_USER_GROUPS:
      let newState = state;
      newState.groups = action.groups;
      newState.chores = action.chores;
      return merge({}, _defaultState, action.groups);
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default UserReducer;
