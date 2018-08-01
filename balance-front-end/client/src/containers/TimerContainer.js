import React, { Component } from 'react';
import Clock from './Clock';

class TimerContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: 0,
		}
	}

	render() {
		return (
			<div className='App-component'>
				<br /><br />
				<Clock />
				<br />
			</div>
		)
	}
}

export default TimerContainer;