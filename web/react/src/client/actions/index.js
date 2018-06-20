// stored data of fetchUsers
export const FETCH_USERS = 'fetch_users';
// action creator
export const fetchUsers = () => async (dispatch, getState, api) => {
	// once response is received from http req
	const res = await api.get('/users');

	// dispatch action creator
	dispatch({
		type: FETCH_USERS,
		payload: res
	});
}