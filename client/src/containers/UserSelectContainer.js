import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from '../components/UserSelect'
import { getAllUsers, setCurrentUser } from '../reducers/usersReducer'

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


	handleUserSelect = (e) => {
		this.setState({
			userSelection: e.target.value,
		})
		this.props.setCurrentUser(e.target.value);
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
			</div>
		);
	}
}

const mapStateToProps = state => {
  return { users: state.usersReducer.users }
}

const mapDispatchToProps = dispatch => {
	return { 
		getAllUsers: () => dispatch(getAllUsers()),
		setCurrentUser: () => dispatch(setCurrentUser())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelectContainer);
// Map dispatch to props for current user data event?