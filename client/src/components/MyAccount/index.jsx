import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { MdError } from 'react-icons/md';

import SignUp from '../SignUp';
import Login from '../Login';
import './MyAccount.css';

export default class MyAccount extends Component {
  state = {
    loginEmail: '',
    loginPassword: '',
    loginRememberMe: false,
    signupEmail: '',
    signupPassword: '',
    error: false,
  };

  handleLoginChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const { loginEmail, loginPassword, loginRememberMe } = this.state;
    const loginState = {
      loginEmail,
      loginPassword,
      loginRememberMe,
    };

    if (loginEmail === '' || loginPassword === '') {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }

    fetch('/login', {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(loginState),
    });
    e.preventDefault();
  };

  handleLoginClick = () => {
    this.setState(prevState => ({
      LoginRememberMe: !prevState.LoginRememberMe,
    }));
  };

  handleSignUpChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignUpSubmit = e => {
    const { signupEmail, signupPassword } = this.state;
    const signUpState = {
      signupEmail,
      signupPassword,
    };

    if (signupEmail === '' || signupPassword === '') {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }

    e.preventDefault();
    fetch('/sign-up', {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(signUpState),
    });
  };

  render() {
    const { error } = this.state;
    return (
      <Fragment>
        <div className="my-account">
          <div className="my-account__container">
            <h2 className="my-account__header">My Account</h2>
            <div className="my-account__link-wrapper">
              <Link className="my-account__home-ref" to="/">
                Atelier
              </Link>
              <p className="my-account__wrapper-text"> &gt; My Account</p>
            </div>
          </div>
        </div>
        <div className="my-account__forms-container">
          {error === true && (
            <div className="my-account__error-message">
              <MdError className="my-account__error-icon" />
              <b>Error:</b> Username or password is required
            </div>
          )}
          <div className="my-account__forms-wrapper">
            <Login
              handleChange={this.handleLoginChange}
              handleSubmit={this.handleLoginSubmit}
              handleClick={this.handleLoginClick}
            />
            <SignUp
              handleChange={this.handleSignUpChange}
              handleSubmit={this.handleSignUpSubmit}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
