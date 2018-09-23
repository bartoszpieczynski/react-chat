import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import currentUserReducer from './currenUser';

const rootReducer = combineReducers({
   sessionState: sessionReducer,
   userState: userReducer,
   currentUserState: currentUserReducer
});

export default rootReducer;