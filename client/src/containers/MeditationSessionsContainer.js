import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeditationSession from '../components/MeditationSession'

class MeditationSessionsContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    
	}

	render() {
		let sessions;
 	
	 	if (this.props.currentUser){
	 		if (this.props.currentUser.meditation_sessions.length > 0) {
	 			sessions = this.props.currentUser.meditation_sessions.map(session => {
	 				return <MeditationSession session={session} />
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
		  	This is the Meditation Sessions Controller
		  	{ sessions }
		  </div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		currentUser: state.usersReducer.currentUser[0],
	}
}

export default connect(mapStateToProps, null)(MeditationSessionsContainer);

