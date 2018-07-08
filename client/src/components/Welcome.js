import React from 'react';
import UserSelect from './UserSelect'

const Welcome = (props) => {
	return (
		<div className="App-welcome">
		  <h2>Find Balance!</h2>
		  <p>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</p>
		  <p>Select User to Track Progress</p>
		  <p>
		    <UserSelect users={[{id: "1", name: "Paul"}]} />
		  </p>
		</div>
	);
}

export default Welcome;