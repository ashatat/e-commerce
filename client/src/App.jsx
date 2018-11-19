import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Normalize.css';
import './App.css';

/* eslint-disable  */
class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/my-account" >
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
