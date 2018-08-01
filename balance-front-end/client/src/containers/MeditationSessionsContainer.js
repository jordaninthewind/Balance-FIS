import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeditationSession from '../components/MeditationSession'
import { getUserMeditationSessions, deleteMeditationSession } from '../reducers/meditationSessionsReducer'

class MeditationSessionsContainer extends Component {
	
	componentDidMount() {
		if (this.props.currentUser) {
			this.props.setUserMeditationSessions(this.props.currentUser);
		}
	}

	render() {
		let sessions;
 	
	 	if (this.props.meditationSessions) {
	 		if (this.props.meditationSessions.length > 0) {
	 			sessions = this.props.meditationSessions.map(session => {
	 				return (<div key={session.id}>
			 					<MeditationSession 
			 						session={session} 
			 						currentUser={this.props.currentUser}
			 						deleteSession={this.props.deleteMeditationSession} 
			 					/>
			 					<hr style={{width: '40%'}}/>
	 						</div>)
	 			})
	 		} else {
	 			sessions = <div>"There are no sessions yet!"</div>
	 		}
	 	} else {
	 		sessions = <div>"Select User to see sessions!"</div>;
	 	}

		return (
		  <div className='App-component'>
		  	<br /><br />
		  	{ 
		  		this.props.currentUser && <div>{this.props.currentUser.name}'s Sessions</div> 
		  	}
			{ 
		  		(this.props.meditationSessions > 0) && <div>Total Count: {this.props.meditationSessions}</div>
		  	}
		  		
		    <br />
		  	{ sessions }
		  </div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		currentUser: state.usersReducer.currentUser,
		meditationSessions: state.meditationSessionsReducer.meditationSessions,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setUserMeditationSessions: (currentUser) => dispatch(getUserMeditationSessions(currentUser)),
		deleteMeditationSession: (currentUser, session) => dispatch(deleteMeditationSession(currentUser, session))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MeditationSessionsContainer);

