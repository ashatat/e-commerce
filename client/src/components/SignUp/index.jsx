import React, { Component } from 'react';
import InputField from '../common/InputField';
import './SignUp.css';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch('/sign-up', {
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
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <div className="sign-up-form__container">
          <h4 className="sign-up-form__header">Not registered? No problem</h4>
          <p className="sign-up-form__paragraph">
            Creating an account with Joyn is quick and easy, and will allow you
            to move through our checkout quicker. You can also store multiple
            shipping addresses, gain access to your order history, and much
            more.
          </p>
          <InputField
            id="email"
            labelText="Email address"
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
          <div className="sign-up-form__submit-container">
            <InputField
              className="sign-up-form__submit"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </form>
    );
  }
}
