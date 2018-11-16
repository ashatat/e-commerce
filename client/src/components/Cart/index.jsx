/* eslint-disable */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Input from '../common/InputField';
import '/style.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
 }

  render() {
    return (
      <Fragment>
        <Input type="button" name="update" className="updateCartButton" />
      </Fragment>
    );
  }
}

export default Cart;
