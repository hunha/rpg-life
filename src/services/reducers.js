import { combineReducers } from 'redux';
import feedReducer from './feed/reducer';
import accountReducer from './account/reducer';

export default combineReducers({
  feed: feedReducer,
  account: accountReducer
});
