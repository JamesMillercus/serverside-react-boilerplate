import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
	// return the following html
	render() {
		return (
			<div>
				<div> Here is a list of users: </div>
				<ul>{this.renderUsers()}</ul>
			</div>
		);
	}

	componentDidMount() {
		// once component is rendered it will attempt to use the fetch users via the action creator
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>;
		});
	}
}

// map the state of data called from fetchUsers to users[state.users]
function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	// fetchUsers will return a promise representing the req
	return store.dispatch(fetchUsers());
}

export { loadData };
// Pass the state of fetchUsers into UsersList React Component
export default connect(mapStateToProps, { fetchUsers })(UsersList);