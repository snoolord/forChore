import { RECEIVE_CURRENT_USER,
         LOGOUT,
         RECEIVE_ERRORS }
         from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = function(state = _nullUser, action){
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = {errors: action.errors};
      return merge({}, state, errors);
    default:
      return state;
  }
};



export default SessionReducer;
