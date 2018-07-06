import React from 'react';

const userProps = {name: "Paul", timeSpentMeditating: "40 hours", location: "San Francisco, CA"}

const UserInfo = (props) => {
	return (
		<div>
			<div>User Name: {userProps.name}</div>
			<div>Time Meditated: {userProps.timeSpentMeditating}</div>
			<div>Location: {userProps.location}</div>
		</div>
	);
}

export default UserInfo;