import React from 'react';

const UserInfo = (props) => {
	return (
		<div>
			<div>User Name: {props.currentUserData.name}</div>
			<div>Time Meditated: {props.currentUserData.timeSpentMeditating}</div>
			<div>Location: {props.currentUserData.location}</div>
		</div>
	);
}

UserInfo.defaultProps = {
	name: "",
	timeSpentMeditating: "",
	location: ""
}

export default UserInfo;