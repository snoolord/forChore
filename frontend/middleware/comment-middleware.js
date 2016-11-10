import {
        CREATE_GROUP_COMMENT,
        CREATE_MY_COMMENT
      } from '../actions/comment_actions';

import {
        postComment
      } from '../util/comment_api_util';

import {
        fetchAGroup
      } from '../actions/group_actions';

import {
        fetchUserGroups
      } from '../actions/user_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = comment => {
    dispatch(fetchAGroup(comment.group_id));
  };
  const errorCallback = errors => console.log(errors);
  switch(action.type) {
    case CREATE_GROUP_COMMENT:
      postComment(action.comment, successCallback, errorCallback);
      return next(action);
    case CREATE_MY_COMMENT:
      const success = () => {
        dispatch(fetchUserGroups());
      };
      postComment(action.comment, success, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
