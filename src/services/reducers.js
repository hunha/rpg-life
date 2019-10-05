import { combineReducers } from 'redux';
import feedReducer from './feed/reducer';
import accountReducer from './account/reducer';
import statReducer from './stat/reducer';

export default combineReducers({
  feed: feedReducer,
  account: accountReducer,
  stat: statReducer
});
