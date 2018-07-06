import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Grid, Row } from 'react-bootstrap';

const dummyQuotes = [
	{content: "BizzleBub", author: "Paul van den Buyer"}, 
	{content: "1Fugglebugs and fiddlesticks", author: "Scrappy Doo"},
	{content: "2Fugglebugs and fiddlesticks", author: "Scrappy Doo"},
	{content: "3Fugglebugs and fiddlesticks", author: "Scrappy Doo"},
	]

class QuoteContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentQuoteIndex: 0,
		}
	}

	selectQuote() {
		const quoteIndex = Math.floor((Math.random() * (dummyQuotes.length - 1) + 0));
		this.setState({currentQuoteIndex: quoteIndex})
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