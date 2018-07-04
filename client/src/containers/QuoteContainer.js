import React, { Component } from 'react';

class QuoteContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: 'QUOTE',
		}
	}

	render() {
		return <div>I AM THE {this.state.quote} CONTAINER</div>
	}
}

export default QuoteContainer;