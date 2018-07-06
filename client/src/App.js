import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteContainer from './containers/QuoteContainer';
import TimerContainer from './containers/TimerContainer';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavBar />
          <BrowserRouter>
            <Switch>
             <div>
              <Link to="/" activeStyle={{background: 'darkblue'}}>Home</Link>
              <Link to="/user" exact activeStyle={{ background: 'darkblue' }}>Account</Link>
              <Link to="/user" exact activeStyle={{ background: 'darkblue' }}>Meditation Sessions</Link>
              <Link to="/timer" exact activeStyle={{ background: 'darkblue' }}>Timer</Link>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/user" component={Welcome} />
              <Route path="/timer" component={TimerContainer} />
              </div>
            </Switch>
          </BrowserRouter>
        <QuoteContainer />
      </div>
    );
  }
}

export default App;
