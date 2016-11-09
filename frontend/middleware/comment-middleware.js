import {
        CREATE_COMMENT
      } from '../actions/comment_actions';

import {
        postComment
      } from '../util/comment_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = comment => {
    // console.log(group, "In thiS SUCCESS");
    console.log("success");
  };
  const errorCallback = errors => console.log(errors);
  switch(action.type) {
    case CREATE_COMMENT:
      postComment(action.comment, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
