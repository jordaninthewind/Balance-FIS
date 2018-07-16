import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from '../components/UserSelect';
import { getAllUsers, setCurrentUser } from '../reducers/usersReducer';
import NewUserForm from '../components/NewUserForm';
import UserContainer from './UserContainer';

class UserSelectContainer extends Component {
	constructor(props) {
		super(props);

    	this.state = {
    	  userSelection: null,
    	  displayNewUser: false,
    	}
	}

  	componentDidMount() {
		this.props.getAllUsers();
    }

	handleUserSelect = (e) => {
		this.setState({ 
			userSelection: e.target.value,
		});

		const currentUser = this.props.users.filter(user => {
			return user.id.toString() === e.target.value;
		})
		this.props.setCurrentUser(currentUser[0]); // filter returns an array, so don't remove this index reference
	}

	removeNewUserForm = () => {
		this.setState({
			displayNewUser: false,
		})
	}

	showNewUserForm = () => {
		this.setState({
			displayNewUser: true,
		})
	}

	render() {
		return (
			<div className="App-welcome">
				<h2>Find Balance!</h2>
			  	<div>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</div>
			  	{
			  		this.props.currentUser ? <UserContainer /> : null
			  	}
			  	<p>Select User to Track Progress</p>
			  	<p>
			      <UserSelect users={this.props.users} userChange={this.handleUserSelect} currentUser={this.props.currentUser} />
			  	</p>
				<div>or create a new account:</div>
			  {
		  		!this.state.displayNewUser ? 
		  			<button onClick={() => this.showNewUserForm()}>New User</button> : 
		  			<NewUserForm 
		  				onSubmit={this.props.getAllUsers} 
		  				removeForm={this.removeNewUserForm}
		  			/>
		  	  }
			</div>
		);
	}
}

const mapStateToProps = state => {
  return { 
  	  users: state.usersReducer.users,
  	  currentUser: state.usersReducer.currentUser,
  	}
}

const mapDispatchToProps = dispatch => {
	return { 
		getAllUsers: () => dispatch(getAllUsers()),
		setCurrentUser: (user) => dispatch(setCurrentUser(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelectContainer);