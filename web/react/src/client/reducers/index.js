import { combineReducers } from 'redux';
// import usersReducer
import usersReducer from './usersReducer';
// combine all existing reducers
export default combineReducers({
	users: usersReducer
});