import { combineReducers } from 'redux';
import feedReducer from './feed/reducer';
import accountReducer from './account/reducer';
import statReducer from './stat/reducer';
import expBarReducer from './exbBar/reducer';

export default combineReducers({
    feed: feedReducer,
    account: accountReducer,
    stat: statReducer,
    expBar: expBarReducer
});
