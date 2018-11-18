import React, { Component } from 'react';
import InputField from '../common/InputField';
import './Login.css';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      rememberMe: !prevState.rememberMe,
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch('/login', {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.state),
    });
    e.preventDefault();
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h4 className="login-form__header">Registered Customer</h4>
        <InputField
          id="email"
          labelText="Username or email address"
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
        <div className="login-form__button-container">
          <InputField
            className="login-form__submit"
            type="submit"
            value="Login"
          />
          <InputField
            className="login-form__checkbox"
            type="checkbox"
            onClick={this.handleClick}
          />
          <span className="remember-me__span">Remember Me</span>
        </div>
        <p>
          <a className="login-form__anchor" href="/my-account/lost-password">
            Lost your password?
          </a>
        </p>
      </form>
    );
  }
}
