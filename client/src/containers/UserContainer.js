import React, { Component } from 'react';
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux';
import { deleteUser, deleteCurrentUser } from '../reducers/usersReducer'

class UserContainer extends Component {
	render() {
		return (
			<div className='App-component'>
				<hr />
				<h2>Logged In As:</h2>
				{ this.props.currentUser && <UserInfo currentUserData={this.props.currentUser} /> }
				{ !this.props.currentUser && <h3>Please select a current user.</h3> }
				<br />
				{
				this.props.currentUser && <button onClick={() => this.props.deleteUser(this.props.currentUser)}>Delete User</button>
				}
				{
				this.props.currentUser && <button onClick={() => this.props.logOut()}>Log Out</button>
				}
				<hr />
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

const mapDispatchToProps = dispatch => {
	return {
		deleteUser: (user) => dispatch(deleteUser(user)),
		logOut: () => dispatch(deleteCurrentUser())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);