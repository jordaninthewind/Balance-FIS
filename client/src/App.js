import React, { Component } from 'react';
import TitleBar from './components/TitleBar.js';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteContainer from './containers/QuoteContainer';
import UserContainer from './containers/UserContainer';
import TimerContainer from './containers/TimerContainer';
import Welcome from './components/Welcome';
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
              <Link to="/user" >Meditation Sessions</Link>
              <span>  -  </span> 
              <Link to="/timer" exact >Timer</Link>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/user" component={UserContainer} />
              <Route path="/timer" component={TimerContainer} />
            </div>
          </BrowserRouter>
        <QuoteContainer />
      </div>
    );
  }
}

export default App;
