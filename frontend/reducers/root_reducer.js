// frontend/reducers/root_reducer.jsx

import { combineReducers } from 'redux';
import GroupReducer from './group_reducer';
import SessionReducer from './session_reducer';
import UserReducer from './user-reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  group: GroupReducer,
  user: UserReducer
});

export default RootReducer;
