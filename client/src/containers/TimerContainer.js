import React from 'react';

class TimerContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			time: 0,
		}
	}

	render() {
		return (<div>I AM THE TIMER CONTAINER</div>
			<Clock />
		)
	}
}

export default TimerContainer;