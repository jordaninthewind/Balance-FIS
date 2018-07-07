import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap';
import UserSelect from './UserSelect'

const Welcome = () => {
	return (
		<Jumbotron>
		  <h1>Find Balance!</h1>
		  <p>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</p>
		  <p>Select User to Track Progress</p>
		  <p>
		    <UserSelect />
		  </p>
		</Jumbotron>
	);
}

export default Welcome;