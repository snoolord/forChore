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
      } from '../util/group_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = group => {
    dispatch(receiveUserGroups(group));
  };
  const errorCallback = error => console.log(error);

  switch(action.type) {
    case CREATE_A_GROUP:
      createGroup(action.group, successCallback, errorCallback);
      return next(action);
    case FETCH_A_GROUP:
      fetchGroup(action.id, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
