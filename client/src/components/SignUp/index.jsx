import React, { Component } from 'react';
import InputField from '../common/InputField';
/* eslint linebreak-style: ["error", "windows"] */
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <InputField
          className
          name="email"
          type="text"
          onChange={this.handleChange}
        />
        <InputField name="password" type="text" onChange={this.handleChange} />
        <InputField type="submit" value="Sign Up" />
        <InputField
          type="checkbox"
          name="rememberMe"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
