import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeditationSession from '../components/MeditationSession'

class MeditationSessionsContainer extends Component {
	render() {
		let sessions;
 	
	 	if (this.props.currentUser) {
	 		if (this.props.currentUser.meditation_sessions.length > 0) {
	 			sessions = this.props.currentUser.meditation_sessions.map(session => {
	 				return <div key={session.id}><MeditationSession session={session} /><hr style={{width: '40%'}}/></div>
	 			})
	 		} else {
	 			sessions = <div>"There are no sessions yet!"</div>
	 		}
	 	} else {
	 		sessions = <div>"Select User to see sessions!"</div>;
	 	}

		return (
		  <div>
		  	<br /><br />
		  	{ this.props.currentUser && <div>{this.props.currentUser.name}'s  
		  		{this.props.currentUser.meditation_sessions.length > 0 ? 
		  		 this.props.currentUser.meditation_sessions.length : 
		  		 null } Sessions</div> }
		    <br />
		  	{ sessions }
		  </div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		currentUser: state.usersReducer.currentUser,
	}
}

export default connect(mapStateToProps, null)(MeditationSessionsContainer);

