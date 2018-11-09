import React, { Component } from 'react';
import InputField from './components/common/InputField';
/* eslint-disable  */
class App extends Component {
  render() {
    return (
      <div>
      <InputField className="input__account"/>
      <InputField className="input__footer"/>
      </div>
    );
  }
}

export default App;
