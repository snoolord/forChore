import {
        CREATE_COMMENT
      } from '../actions/comment_actions';

import {
        postComment
      } from '../util/comment_api_util';

import {
        fetchAGroup
      } from '../actions/group_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = comment => {
    dispatch(fetchAGroup(comment.group_id));
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
