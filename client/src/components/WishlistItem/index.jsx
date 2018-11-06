import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const WishlistItem = props => {
  const {
    id,
    name,
    isInStock,
    imgUrl,
    price,
    addToCart,
    removeFromCart,
  } = props;

  return (
    <div className="wishlist__item">
      <div className="wishlist__div wishlist__div--size-full">
        <NavLink to={`/product/${id}`}>
          <img src={imgUrl} alt={name} className="wishlist__image" />
        </NavLink>
      </div>

      <div className="wishlist__div wishlist__div--width-30 wishlist__div--padding-left-20">
        <NavLink to={`/product/${id}`} className="wishlist__name">
          {name}
        </NavLink>
      </div>

      <div className="wishlist__div">
        <span className="whishlist__price">£{price}</span>
      </div>

      <div className="wishlist__div stock-container">
        <span
          className={`wishlist__stock-status wishlist__stock-status--${
            isInStock ? 'color-green' : 'color-red'
          } `}
        >
          {isInStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      <div className="wishlist__div ">
        <button
          type="button"
          className="wishlist__button wishlist__button--yellow"
          id={id}
          onClick={addToCart}
          title="Add to Cart"
        >
          + Add to Cart
        </button>
      </div>

      <div className="wishlist__div wishlist__div--width-10">
        <button
          type="button"
          className="wishlist__button--x"
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

WishlistItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isInStock: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default WishlistItem;
