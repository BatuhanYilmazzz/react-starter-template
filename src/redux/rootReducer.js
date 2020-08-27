import { combineReducers } from 'redux';
import { musicReducer } from './music/musicReducer';
import { userReducer } from './user/userReducer';

const rootReducer = combineReducers({
  music: musicReducer,
  user: userReducer,
});

export default rootReducer;
