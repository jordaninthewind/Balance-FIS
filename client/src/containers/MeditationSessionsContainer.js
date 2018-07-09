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
		return (
		  <div>
		    <br /><br />
		  	This is the Meditation Sessions Controller

		  	<MeditationSession session={{duration: 10, date: 200}} />
		  	<MeditationSession session={{duration: 10, date: 200}} />
		  </div>
		)
	}
}

const mapStateToProps = state => {
	return { currentUser: state.usersReducer.currentUser }
}

export default connect(mapStateToProps, null)(MeditationSessionsContainer);