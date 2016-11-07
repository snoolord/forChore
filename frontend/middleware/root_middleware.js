import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import GroupMiddleware from './group-middleware';
import UserMiddleware from './user-middleware';
import ChoreMiddleware from './chore-middleware';

const RootMiddleware = applyMiddleware(
  ChoreMiddleware,
  SessionMiddleware,
  GroupMiddleware,
  UserMiddleware
);

export default RootMiddleware;
