import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap';

export const Welcome = () => {
	return (
		<Jumbotron>
		  <h1>Find Balance!</h1>
		  <p>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</p>
		  <p>Select User to Track Progress</p>
		  <p>
		    <Button bsStyle="primary">Login</Button>
		  </p>
		</Jumbotron>
	);
}

export default Welcome;