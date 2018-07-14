import React from 'react';

const UserInfo = (props) => {
	const minutes = Math.floor(props.currentUserData.total_time / 60);
	const totalMinutes = minutes % 60;
	const hours = Math.floor(minutes / 60);
	const seconds = (props.currentUserData.total_time % 60);
	
	return (
		<div>
			<h3>User Name: {props.currentUserData.name}</h3>
				<div>Total Time: 
					{" " + hours}
					:{ totalMinutes < 10 ? "0" + totalMinutes : totalMinutes }
					:{ seconds < 10 ? "0" + seconds : seconds }
				</div>
			<div>Location: {props.currentUserData.location}</div>
		</div>
	);
}

export default UserInfo;