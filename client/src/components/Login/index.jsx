import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputField from '../common/InputField';
import './Login.css';

export default function Login(props) {
  const { handleChange, handleSubmit, handleClick } = props;
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h4 className="login-form__header">Registered Customer</h4>
      <InputField
        id="email"
        labelText="Username or email address"
        className="login-form__text"
        labelClass="login-form__label"
        name="loginEmail"
        type="text"
        onChange={handleChange}
      />
      <InputField
        id="password"
        labelText="Password"
        labelClass="login-form__label"
        className="login-form__text"
        name="loginPassword"
        type="text"
        onChange={handleChange}
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
          onClick={handleClick}
        />
        <span className="remember-me__span">Remember Me</span>
      </div>
      <p>
        <Link to="/my-account/lost-password" className="login-form__anchor">
          Lost your password?
        </Link>
      </p>
    </form>
  );
}

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
