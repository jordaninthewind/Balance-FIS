import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Grid, Row } from 'react-bootstrap';

const dummyQuotes = [
	{content: "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.", author: "Pema Chodron"}, 
	{content: "The most fundamental aggression to ourselves, the most fundamental harm we can do to ourselves, is to remain ignorant by not having the courage and the respect to look at ourselves honestly and gently.", author: "Pema Chodron"},
	{content: "You are the sky. Everything else – it’s just the weather.", author: "Pema Chodron"},
	{content: "Fear is a natural reaction to moving closer to the truth.", author: "Pema Chodron"},
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