import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Grid, Row } from 'react-bootstrap';

const dummyQuotes = [{content: "BizzleBub", author: "Paul van den Buyer"}, {content: "Fugglebugs and fiddlesticks", author: "Scrappy Doo"}]

class QuoteContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentQuoteIndex: 0,
		}
	}

	selectQuote() {
		this.state.currentQuoteIndex === 0 ? this.setState({currentQuoteIndex: 1}) : this.setState({currentQuoteIndex: 0});
	}

	componentDidMount() {
    	setInterval(this.selectQuote.bind(this), 15000);
    }

	render() {
		return (
		  <div className="App-footer">
			{dummyQuotes[this.state.currentQuoteIndex].content} - {dummyQuotes[this.state.currentQuoteIndex].author}
		  </div>
		)
	}
}

export default QuoteContainer;