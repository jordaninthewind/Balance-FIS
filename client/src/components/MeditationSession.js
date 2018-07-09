import React from 'react';

const MeditationSession = props => {
	return (
		<div>
			<p>Duration: {props.session.duration}</p>
			<p>Date: {props.session.created_at}</p>
		</div>
	)
};

export default MeditationSession;
