import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.setState({
        timerStarted: false,
      })
  }

  resetClock = (e) => {
  	clearInterval(this.intervalId)
  	this.setState({
  		timeCount: 0,
  		timerStarted: false,
  	})
  }

  saveSession = (e) => {
    if (this.props.currentUser) {
      fetch(`http://localhost:3001/users/${this.props.currentUser.id}/meditation_sessions`, {
        headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({meditation_session: {time: this.state.timeCount}})
        })
        .then(function(res){ alert("Saved session!") })
        .catch(function(res){ console.log(res) })

        this.setState({
          timeCount: 0,
          timerStarted: false
        })
        clearInterval(this.intervalId)

    } else {
      alert("You must be logged in to save a session!")
    }
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
      	<h3>Time Since Start:</h3>
      	<h1 style={{fontSize: '3em'}}>{timeSpentMeditating}</h1>
      		<button onClick={() => this.startClock()} >Start</button>
      		<button onClick={() => this.pauseClock()} >Pause</button>
      		<button onClick={() => this.resetClock()} >Reset</button>
      		<button onClick={() => this.saveSession()} >Save</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
  }
}

export default connect(mapStateToProps, null)(Clock);