import { filterUser, FILTER_USER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultState = {
  id: 0
};

const FilterReducer = function(state = _defaultState, action) {
  switch(action.type) {
    case FILTER_USER:
      let filter = {id: action.id};
      return merge({}, filter);
    default:
      return state;
  }
};

export default FilterReducer;
