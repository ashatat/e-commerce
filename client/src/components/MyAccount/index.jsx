import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function MyAccount() {
  return (
    <Fragment>
      <div className="my-account">
        <div>
          <h2 className="my-account__header">MyAccount</h2>
          <div className="my-account__link-wrapper">
            <Link className="my-account__home-ref" to="/">
              Atelier
            </Link>
            <p className="my-account__wrapper-text"> &gt; My Account</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
