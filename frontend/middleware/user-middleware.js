import {
      fetchUserGroups,
      FETCH_USER_GROUPS,
      receiveUserGroups,
      RECEIVE_USER_GROUPS,
      fetchUsers,
      FETCH_USERS,
      receiveUsers,
      RECEIVE_USERS
      } from '../actions/user_actions';

import {
        getUsers,
        getGroups
      } from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successUserGroupsCallback = group => {
    dispatch(receiveUserGroups(group));
  };
  const successUsersCallback = users => {
    dispatch(receiveUsers(users));
  };
  const errorCallback = error => console.log(error);
  switch(action.type) {
    case FETCH_USER_GROUPS:
    console.log("hitting fetch users");
      getGroups(successUserGroupsCallback, errorCallback);
      return next(action);
    case FETCH_USERS:
      getUsers(successUsersCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
