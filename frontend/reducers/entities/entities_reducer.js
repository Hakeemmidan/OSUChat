import { combineReducers } from 'redux';
import users from './users_reducer';
import messages from './messages_reducer';

export const entitiesReducer = combineReducers({
  users,
  messages
});