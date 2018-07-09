import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeditationSessionsContainer extends Component {
	constructor(props) {
		super(props);
	}

 // componentDidMount() {
 //    	setInterval(this.selectQuote.bind(this), 15000);
 //    }

	render() {
		return (
		  <div>
		    <br /><br />
		  	This is the Meditation Sessions Controller
		  </div>
		)
	}
}

// const mapStateToProps = state => {
// 	return { quotes: state.quotesReducer.quotes }
// }

export default connect(null, null)(MeditationSessionsContainer);