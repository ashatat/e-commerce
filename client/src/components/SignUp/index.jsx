import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/InputField';
import './SignUp.css';

export default function SignUp(props) {
  const { handleSubmit, handleChange } = props;
  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="sign-up-form__container">
        <h4 className="sign-up-form__header">Not registered? No problem</h4>
        <p className="sign-up-form__paragraph">
          Creating an account with Joyn is quick and easy, and will allow you to
          move through our checkout quicker. You can also store multiple
          shipping addresses, gain access to your order history, and much more.
        </p>
        <InputField
          id="email"
          labelText="Email address"
          className="sign-up-form__text"
          labelClass="sign-up-form__label"
          name="signupEmail"
          type="text"
          onChange={handleChange}
        />
        <InputField
          id="password"
          labelText="Password"
          labelClass="sign-up-form__label"
          className="sign-up-form__text"
          name="signupPassword"
          type="text"
          onChange={handleChange}
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

SignUp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
