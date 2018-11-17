import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Normalize.css';
import './App.css';
import SignUp from './components/SignUp';

/* eslint-disable  */
class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/my-account" >
            <SignUp />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
