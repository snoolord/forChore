import {
        createChore,
        CREATE_CHORE
      } from '../actions/chore_actions';
import {
        postChore
      } from '../util/chore_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = chore => {
    // console.log(group, "In thiS SUCCESS");
    console.log("success");
  };
  const errorCallback = errors => console.log(errors);

  switch(action.type) {
    case CREATE_CHORE:
    console.log("create chore");
      postChore(action.chore, successCallback, errorCallback);
      return next(action);
    default:
    console.log("default");
      return next(action);
  }
};
