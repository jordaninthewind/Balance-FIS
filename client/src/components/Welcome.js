import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap';

export const Welcome = () => {
	return (
		<Jumbotron>
		  <h1>Hello, world!</h1>
		  <p>
		    This is a simple hero unit, a simple jumbotron-style component for calling
		    extra attention to featured content or information.
		  </p>
		  <p>
		    <Button bsStyle="primary">Learn more</Button>
		  </p>
		</Jumbotron>
	);
}

export default Welcome;