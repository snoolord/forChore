import {
  RECEIVE_CHORE,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/chore_actions';

import merge from 'lodash/merge';

const _defaultState = {
  chores: [],
  errors: []
};

const ChoreReducer = function(state = _defaultState, action) {
  let newState = state;
  console.log("chore reducer");
  switch(action.type){
    case RECEIVE_CHORE:
      console.log("receving chore", action);
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
