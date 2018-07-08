import React from 'react';

const UserInfo = (props) => {
	return (
		<div>
			<div>User Name: {props.name}</div>
			<div>Time Meditated: {props.timeSpentMeditating}</div>
			<div>Location: {props.location}</div>
		</div>
	);
}

UserInfo.defaultProps = {
	name: "Paul",
	timeSpentMeditating: "40 Hours",
	location: "San Francisco, CA",
}

export default UserInfo;