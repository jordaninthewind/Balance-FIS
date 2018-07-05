import React, { Component } from 'react';
// import { Grid, Row } from 'react-bootstrap';

class QuoteContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: 'Err on the side of greatness and compassion always.',
			author: 'James P. Wembly'
		}
	}

	render() {
		return ( 
		  <div className="App-footer">
			{this.state.quote} - {this.state.author}
		  </div>
		)
	}
}

export default QuoteContainer;