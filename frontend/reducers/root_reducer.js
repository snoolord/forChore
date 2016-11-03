// frontend/reducers/root_reducer.jsx

import { combineReducers } from 'redux';
import GroupReducer from './group_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  group: GroupReducer
});

export default RootReducer;
