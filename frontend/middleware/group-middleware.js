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
        fetch
      } from '../actions/group_actions';
import {
        createGroup,
        fetchGroup,
        leaveGroup,
        fetchAndDeleteGrouping
      } from '../util/group_api_util';
import {
        fetchUserGroups
      } from '../actions/user_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = group => {
    dispatch(receiveGroup(group));
  };
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case CREATE_A_GROUP:
      createGroup(action.group, successCallback, errorCallback);
      return next(action);
    case FETCH_A_GROUP:
      fetchGroup(action.id, successCallback, errorCallback);
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
