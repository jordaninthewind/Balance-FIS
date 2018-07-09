import React, { Component } from 'react';
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux';

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
				{ this.props.currentUser && <UserInfo currentUserData={this.props.currentUser} /> }
				{ !this.props.currentUser && <h3>Please select a current user.</h3> }
				<br />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		currentUser: state.usersReducer.currentUser[0],
		users: state.usersReducer.users,
	}
}

export default connect(mapStateToProps, null)(UserContainer);