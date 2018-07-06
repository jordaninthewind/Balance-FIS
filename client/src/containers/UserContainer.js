import React, { Component } from 'react';
import UserInfo from '../components/UserInfo'

class UserContainer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="App-timer">
				This is the user Container
				<br /><br />
				<UserInfo />
				<br />
			</div>
		)
	}
}

export default UserContainer;