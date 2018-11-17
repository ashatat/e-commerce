import React, { Component } from 'react';
import InputField from '../common/InputField';
import './Login.css';

export default class Login extends Component {
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
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <h4 className="sign-up-form__header">Registered Customer</h4>
        <InputField
          id="email"
          labelText="Username or email address"
          className="sign-up-form__text"
          labelClass="sign-up-form__label"
          name="email"
          type="text"
          onChange={this.handleChange}
        />
        <InputField
          id="password"
          labelText="Password"
          labelClass="sign-up-form__label"
          className="sign-up-form__text"
          name="password"
          type="text"
          onChange={this.handleChange}
        />
        <div className="sign-up-form__button-container">
          <InputField
            className="sign-up-form__submit"
            type="submit"
            value="Login"
          />
          <InputField
            className="sign-up-form__checkbox"
            type="checkbox"
            onClick={this.handleClick}
          />
          <span className="remember-me__span">Remember Me</span>
        </div>
        <p>
          <a className="sign-up-form__anchor" href="/my-account/lost-password">
            Lost your password?
          </a>
        </p>
      </form>
    );
  }
}
