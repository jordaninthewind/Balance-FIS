import React, { Component } from 'react';
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux';

class UserContainer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const currentUserData = this.props.users.filter(user => {
			return user.id == this.props.currentUser;
		})

		return (
			<div className="App-timer">
				<br /><br />
				<h1>Current User:</h1>
				<br />
				{ this.props.currentUser && <UserInfo 
					currentUserData={currentUserData[0]}
				/>
			}
				<br />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		currentUser: state.usersReducer.currentUser,
		users: state.usersReducer.users,
	}
}

export default connect(mapStateToProps, null)(UserContainer);