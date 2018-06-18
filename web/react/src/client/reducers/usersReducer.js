// import fetch users action
import { FETCH_USERS } from '../actions';

// export a reducer with state with list of users and FETCH_USERS action 
export default (state = [], action) => {
	// if actions.type
	switch (action.type) {
		//if actions.type is FETCH_USERS
		case FETCH_USERS:
			// give it data
			return action.payload.data;
		default:
			// else return state
			return state;
	}
};