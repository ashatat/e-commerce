import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SignUp from '../SignUp';
import Login from '../Login';
import './MyAccount.css';

export default function MyAccount() {
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
        <Login />
        <SignUp />
      </div>
    </Fragment>
  );
}
