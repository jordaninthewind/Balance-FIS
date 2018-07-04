import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import QuoteContainer from './containers/QuoteContainer'
import TimerContainer from './containers/TimerContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <NavBar />
         <TimerContainer />
         <QuoteContainer />
      </div>
    );
  }
}

export default App;
