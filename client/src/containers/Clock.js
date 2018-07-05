import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {
    	timeCount: 0,
    	timerStarted: false,
    }
  }

  timer() {
    this.setState({
      timeCount: this.state.timeCount + 1,
    })
  }

  // componentDidMount() {
  startClock = (e) => {
  	if (this.state.timerStarted === false) {
    	this.intervalId = setInterval(this.timer.bind(this), 1000);
    	this.setState({
    		timerStarted: true,
    	})
    }
  }

  pauseClock = (e) => {
    clearInterval(this.intervalId);
  }

  resetClock = (e) => {
  	clearInterval(this.intervalId)
  	this.setState({
  		timeCount: 0,
  		timerStarted: false,
  	})
  }

  render() {
  	const minutes = Math.floor(this.state.timeCount / 60);
  	const seconds = () => {
  		if (this.state.timeCount % 60 < 10) {
  			return "0" + this.state.timeCount % 60;
  		} else {
  			return this.state.timeCount % 60;
  		}
  	}

  	const timeSpentMeditating = 
  		this.state.timeCount < 60 ? 
  		this.state.timeCount : 
  		minutes + ":" + seconds();

    return(
      <div>
      	<h4>Time Since Start:</h4>
      	<h1>{timeSpentMeditating}</h1>
      		<button onClick={(e) => this.startClock()} >Start</button>
      		<button onClick={() => this.pauseClock()} >Pause</button>
      		<button onClick={() => this.resetClock()} >Reset</button>
      		<button onClick={() => alert("Ya, not done yet.")} >Save</button>
      </div>
    );
  }
}

export default Clock;