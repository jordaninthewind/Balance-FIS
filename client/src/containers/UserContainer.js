import React, { Component } from 'react';
import UserInfo from '../components/UserInfo'

class UserContainer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="App-timer">
				<br /><br />
				<h1>Current User:</h1>
				<br />
				<UserInfo />
				<br />
			</div>
		)
	}
}

export default UserContainer;