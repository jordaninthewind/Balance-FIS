import React from 'react';

const MeditationSession = (props) => {
	return(
		<div>
			<hr style={{width: '40%'}}/>
			<p>Duration: {props.session.duration}</p>
			<p>Date: {props.session.date}</p>
		</div>
	)
};

export default MeditationSession;
