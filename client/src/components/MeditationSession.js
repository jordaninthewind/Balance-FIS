import React from 'react';

const MeditationSession = props => {
	return (
		<div>
			<p>Duration: {props.session.duration}</p>
			<p>Date: {props.session.created_at}</p>
			<button onClick={() => props.deleteSession(props.currentUser, props.session.id)}>Delete Session</button>
		</div>
	)
};

export default MeditationSession;
