import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const CartItem = props => {
  const {
    id,
    description,
    imgUrl,
    price,
    quantity,
    removeFromCart,
    subtotal,
  } = props;

  return (
    <div className="cart__item">
      <div className="cart__div cart__div--size-full">
        <NavLink to={`/product/${id}`}>
          <img src={imgUrl} alt={description} className="cart__image" />
        </NavLink>
      </div>

      <div className="cart__div cart__div--width-30 cart__div--padding-left-20">
        <NavLink to={`/product/${id}`} className="cart__name">
          {description}
        </NavLink>
      </div>

      <div className="cart__div">
        <span>£{price}</span>
      </div>

      <div className="cart__div">
        <span>£{quantity}</span>
      </div>

      <div className="cart__div">
        <span>£{subtotal}</span>
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
CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
