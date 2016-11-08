import {
        createChore,
        CREATE_CHORE,
        completeChore,
        COMPLETE_CHORE
      } from '../actions/chore_actions';
import {
        postChore,
        finishChore
      } from '../util/chore_api_util';
import {
        fetchUserGroups
      } from '../actions/user_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = chore => {
    // console.log(group, "In thiS SUCCESS");
    dispatch(fetchUserGroups());
  };
  const errorCallback = errors => console.log(errors);

  switch(action.type) {
    case CREATE_CHORE:
    console.log("create chore");
      postChore(action.chore, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
