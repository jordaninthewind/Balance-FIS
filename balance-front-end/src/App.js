import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TitleBar from './components/TitleBar.js';
import QuoteContainer from './containers/QuoteContainer';
import UserContainer from './containers/UserContainer';
import MeditationSessionsContainer from './containers/MeditationSessionsContainer'
import TimerContainer from './containers/TimerContainer';
import UserSelectContainer from './containers/UserSelectContainer';
import ResourcesContainer from './containers/ResourcesContainer'
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
              <Link to="/meditation_sessions" >Meditation Sessions</Link>
              <span>  -  </span> 
              <Link to="/timer" >Timer</Link>
              <span> - </span>
              <Link to="/resources" >Resources</Link>
              <Route exact path="/" component={UserSelectContainer} />
              <Route exact path="/meditation_sessions" component={MeditationSessionsContainer} />
              <Route path="/timer" component={TimerContainer} />
              <Route path="/resources" component={ResourcesContainer} />
            </div>
          </BrowserRouter>
        <QuoteContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser
  }
}

export default connect(mapStateToProps, null)(App);
