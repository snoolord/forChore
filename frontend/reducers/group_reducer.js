import {
  RECEIVE_GROUP,
  RECEIVE_ERRORS
} from '../actions/group_actions';

import merge from 'lodash/merge';

const _defaultState = {
  title: '',
  housemates: {},
  errors: []
};

const GroupReducer = function(state = _defaultState, action) {
  switch(action.type){
    case RECEIVE_GROUP:
      return merge({}, state, action.group);
    case RECEIVE_ERRORS:
      let newState = state;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default GroupReducer;
