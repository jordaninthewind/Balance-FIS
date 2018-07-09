import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TitleBar from './components/TitleBar.js';
import QuoteContainer from './containers/QuoteContainer';
import UserContainer from './containers/UserContainer';
import MeditationSessionsContainer from './containers/MeditationSessionsContainer'
import TimerContainer from './containers/TimerContainer';
import UserSelectContainer from './containers/UserSelectContainer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <TitleBar />
          <BrowserRouter>
            <div className="App-navbar">
              <Link to="/" >Home</Link>
              <span>  -  </span> 
              <Link to="/user" >Account</Link>
              <span>  -  </span> 
              <Link to="/meditation_sessions" >Meditation Sessions</Link>
              <span>  -  </span> 
              <Link to="/timer" >Timer</Link>
              <Route exact path="/" component={UserSelectContainer} />
              <Route exact path="/user" component={UserContainer} />
              <Route exact path="/meditation_sessions" component={MeditationSessionsContainer} />
              <Route path="/timer" component={TimerContainer} />
            </div>
          </BrowserRouter>
        <QuoteContainer />
      </div>
    );
  }
}

export default App;
