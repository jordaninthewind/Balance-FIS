import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from './UserSelect'

class Welcome extends Component {
  constructor(props) {
	super(props);

    this.state = {
      userSelection: null,
    }

  }

	handleChange = (e) => {
		this.setState({
		userSelection: e.target.value,
		})
	}


	render() {
		return (
			<div className="App-welcome">
			  <h2>Find Balance!</h2>
			  <p>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</p>
			  <p>Select User to Track Progress</p>
			  <p>
			    <UserSelect users={this.props.users} userChange={this.handleChange} />
			  </p>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return { users: state.usersReducer.users }
}


export default connect(mapStateToProps, null)(Welcome);