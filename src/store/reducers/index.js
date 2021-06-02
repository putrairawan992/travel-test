import { combineReducers } from 'redux';
import auth from './Auth';
import userInterface from './UserInterface';

export default combineReducers({
  auth,
  userInterface
});
