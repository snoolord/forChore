import {
  RECEIVE_GROUP,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  LEAVE_GROUP
} from '../actions/group_actions';

import merge from 'lodash/merge';

const _defaultState = {
  title: '',
  housemates: {},
  chores: {},
  errors: []
};

const GroupReducer = function(state = _defaultState, action) {
  let newState = state;
  switch(action.type){
    case RECEIVE_GROUP:
    console.log(action, "receiving group after comment");
      return merge({}, _defaultState, action.group);
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      let errorState = state;
      errorState.errors = [];
      return errorState;
    default:
      return state;
  }
};

export default GroupReducer;
