import {
  RECEIVE_GROUP,
} from '../actions/group_actions';

import merge from 'lodash/merge';

const _defaultState = {
  title: '',
  housemates: {}
};

const GroupReducer = function(state = _defaultState, action) {
  switch(action.type){
    case RECEIVE_GROUP:
      console.log("RECEIVING CURRENT USER");
      return merge({}, action.group);
    default:
      console.log("we defaulted");
      return state;
  }
};

export default GroupReducer;
