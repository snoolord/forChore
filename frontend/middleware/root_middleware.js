import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import GroupMiddleware from './group-middleware';
import UserMiddleware from './user-middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GroupMiddleware,
  UserMiddleware
);

export default RootMiddleware;
