import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from '../components/UserSelect'
import { getAllUsers, setCurrentUser } from '../reducers/usersReducer'
import NewUserForm from '../components/NewUserForm'

class UserSelectContainer extends Component {
	constructor(props) {
		super(props);

    	this.state = {
    	  userSelection: null,
    	}
	}

  	componentDidMount() {
		this.props.getAllUsers();
    }


    // componentReceiveProps(nextProps) {
    // 	this.props.getAllUsers();
    // }

	handleUserSelect = (e) => {
		this.setState({ userSelection: e.target.value });
		const currentUser = this.props.users.filter(user => {
			return user.id.toString() === e.target.value;
		})
		this.props.setCurrentUser(currentUser[0]);
	}

	render() {
		return (
			<div className="App-welcome">
				<h2>Find Balance!</h2>
			  	<p>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</p>
			  	<p>Select User to Track Progress</p>
			  	<p>
			      <UserSelect users={this.props.users} userChange={this.handleUserSelect} />
			  	</p>
		  		<NewUserForm onSubmit={this.props.getAllUsers} />
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