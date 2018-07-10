import React from 'react';

const UserInfo = (props) => {
	return (
		<div>
			<h3>User Name: {props.currentUserData.name}</h3>
			<div>Time Meditated: {props.currentUserData.total_time} seconds</div>
			<div>Location: {props.currentUserData.location}</div>
		</div>
	);
}

// UserInfo.defaultProps = {
// 	name: "",
// 	timeSpentMeditating: "4,000,000,000 hours",
// 	location: ""
// }

export default UserInfo;