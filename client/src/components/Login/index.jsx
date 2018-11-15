import React, { Component } from 'react';
import InputField from '../common/InputField';
import './Login.css';
/* eslint linebreak-style: ["error", "windows"] */
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    fetch('/login', {
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
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="login-form__container">
          <h4 className="login-form__header">Not registered? No problem</h4>
          <p>
            Creating an account with Joyn is quick and easy, and will allow you
            to move through our checkout quicker. You can also store multiple
            shipping addresses, gain access to your order history, and much
            more.
          </p>
          <InputField
            id="email"
            labelText="Email address"
            className="login-form__text"
            labelClass="login-form__label"
            name="email"
            type="text"
            onChange={this.handleChange}
          />
          <InputField
            id="password"
            labelText="Password"
            labelClass="login-form__label"
            className="login-form__text"
            name="password"
            type="text"
            onChange={this.handleChange}
          />
          <div className="login-form__submit-container">
            <InputField
              className="login-form__submit"
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </form>
    );
  }
}
