import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuotes } from '../reducers/quotesReducer'
import Quote from '../components/Quote.js'


class QuoteContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentQuoteIndex: 0,
		}
	}

	selectQuote() {
		const quoteIndex = Math.floor((Math.random() * (this.props.quotes.length - 1) + 0));
		this.setState({currentQuoteIndex: quoteIndex});
	}

	componentDidMount() {
		this.props.getAllQuotes();
    	setInterval(this.selectQuote.bind(this), 15000);
    }

	render() {
		return (
		  <div className="App-footer">
		  	{ this.props.quotes.length && 
		  		<Quote 
		  		  quote={this.props.quotes[this.state.currentQuoteIndex]} 
		  		/>}
		  </div>
		)
	}
}

const mapStateToProps = state => {
	return { quotes: state.quotesReducer.quotes }
}

const mapDispatchToProps = dispatch => {
	return { getAllQuotes: () => dispatch(getAllQuotes()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteContainer);