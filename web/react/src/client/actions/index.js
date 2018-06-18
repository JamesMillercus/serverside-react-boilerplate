import axios from 'axios';

// stored data of fetchUsers
export const FETCH_USERS = 'fetch_users';
// action creator
export const fetchUsers = () => async dispatch => {
	// once response is received from http req
	const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
	// dispatch action creator
	dispatch({
		type: FETCH_USERS,
		payload: res
	});
}