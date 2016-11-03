import {
        fetchAGroup,
        createAGroup,
        receiveGroup,
        CREATE_A_GROUP,
        FETCH_A_GROUP
      } from '../actions/group_actions';

import {
        createGroup,
        fetchGroup
      } from '../util/group_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = group => {
    dispatch(receiveGroup(group));
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
