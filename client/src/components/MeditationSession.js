import React from 'react';

const MeditationSession = (props) => {
	return(
		<div>
			<hr />
			<p>Duration: {props.session.duration}</p>
			<p>Date: {props.session.date}</p>
		</div>
	)
};

export default MeditationSession;
