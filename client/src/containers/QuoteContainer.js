import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Grid, Row } from 'react-bootstrap';

const dummyQuotes = [{content: "BizzleBub", author: "Paul van den Buyer"}, {content: "Fugglebugs and fiddlesticks", author: "Scrappy Doo"}]

class QuoteContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: dummyQuotes[0].content,
			author: dummyQuotes[0].author,
		}
	}

	render() {
		return ( 
		  <div className="App-footer">
			{this.state.content} - {this.state.author}
		  </div>
		)
	}
}

export default QuoteContainer;