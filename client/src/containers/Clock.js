import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {
    	timeCount: 0
    }
  }

  timer() {
    this.setState({
      timeCount: this.state.timeCount + 1,
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    return(
      <div>{this.state.timeCount}</div>
    );
  }
}

export default Clock;