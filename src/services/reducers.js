import { combineReducers } from 'redux';
import shelfReducer from './feed/reducer';

export default combineReducers({
  shelf: shelfReducer
});
