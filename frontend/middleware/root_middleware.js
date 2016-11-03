import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import GroupMiddleware from './group-middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GroupMiddleware
);

export default RootMiddleware;
