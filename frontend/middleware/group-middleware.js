import {
        fetchAGroup,
        createAGroup,
        receiveGroup,
        CREATE_A_GROUP,
        FETCH_A_GROUP,
        receiveErrors,
        RECEIVE_ERRORS,
        LEAVE_GROUP,
        FETCH_GROUPING,
        EDIT_GROUP
      } from '../actions/group_actions';
import {
        createGroup,
        fetchGroup,
        leaveGroup,
        fetchAndDeleteGrouping,
        patchGroup
      } from '../util/group_api_util';

import {
      CREATE_COMMENT
    } from '../actions/comment_actions';
import {
        fetchUserGroups
      } from '../actions/user_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = group => {
    // console.log(group, "In thiS SUCCESS");
    dispatch(receiveGroup(group));
  };
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case CREATE_A_GROUP:
      createGroup(action.group, successCallback, errorCallback);
      return next(action);
    case FETCH_A_GROUP:
      console.log(action, "I'm in the group middleware");
      fetchGroup(action.id, successCallback, errorCallback);
      return next(action);
    case EDIT_GROUP:
      // console.log("let's edit");
      patchGroup(action.id, action.group, successCallback, errorCallback);
      return next(action);
    case LEAVE_GROUP:
      let success = () => dispatch(fetchUserGroups());
      let err = (e) => console.log(e);
      fetchAndDeleteGrouping(action.userId, action.groupId, success, err);
      return next(action);
    default:
      return next(action);
  }
};

// case CREATE_COMMENT:
//   console.log(action, "GROUP MIDDLEWARE");
//   fetchGroup(action.groupId, successCallback, errorCallback);
//   return next(action);
