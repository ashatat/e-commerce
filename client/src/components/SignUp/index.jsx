import React, { Component } from 'react';
import InputField from '../common/InputField';
import './SignUp.css';
/* eslint linebreak-style: ["error", "windows"] */
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      rememberMe: !prevState.rememberMe,
    }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    fetch('/sign-up', {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.state),
    });
    e.preventDefault();
  }

  render() {
    return (
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <h4>Registered Customer</h4>
        <InputField
          className
          name="email"
          type="text"
          onChange={this.handleChange}
        />
        <InputField name="password" type="text" onChange={this.handleChange} />
        <div>
          <InputField type="submit" value="Sign Up" />
          <InputField type="checkbox" onClick={this.handleClick} />
        </div>
      </form>
    );
  }
}
