/* eslint-disable */
// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// import Input from '../common/InputField';
// import '/style.css';
//
// class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//  }
//
//   render() {
//     return (
//       <Fragment>
//         <Input type="button" name="update" className="updateCartButton" />
//       </Fragment>
//     );
//   }
// }
//
// export default Cart;
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const CartItem = props => {
  const {
    id,
    name,
    imgUrl,
    price,
    removeFromCart,
  } = props;

  return (
    <div className="cart__item">
      <div className="cart__div cart__div--size-full">
        <NavLink to={`/product/${id}`}>
          <img src={imgUrl} alt={name} className="cart__image" />
        </NavLink>
      </div>

      <div className="cart__div cart__div--width-30 cart__div--padding-left-20">
        <NavLink to={`/product/${id}`} className="cart__name">
          {name}
        </NavLink>
      </div>

      <div className="cart__div">
        <span className="cart__price">£{price}</span>
      </div>

      <div className="cart__div cart__div--width-10">
        <button
          type="button"
          className="cart__button--x"
          id={id}
          onClick={removeFromCart}
          title="Remove this product"
        >
          ×
        </button>
      </div>
    </div>
  );
};

//  run typechecking on the props for cartItem component
cartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
