import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyAccount from './components/MyAccount';

import './Normalize.css';
import './App.css';

/* eslint-disable  */
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/my-account" component={MyAccount} />
        </Switch>
      </Router>
    );
  }
}

export default App;
