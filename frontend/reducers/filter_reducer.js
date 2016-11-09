import { filterUser, FILTER_USER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultState = {
  id: 0
};

const FilterReducer = function(state = _defaultState, action) {
  switch(action.type) {
    case FILTER_USER:
      return merge({}, action.id);
    default:
      return state;
  }
};

export default FilterReducer;
