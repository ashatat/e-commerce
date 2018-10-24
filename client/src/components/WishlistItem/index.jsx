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
    <div className="wishlistItem">
      <div className="img-div">
        <NavLink to={`/product/${id}`}>
          <img src={imgUrl} alt={name} className="img-div__img" />
        </NavLink>
      </div>

      <div className="productName-div">
        <NavLink to={`/product/${id}`} className="productName-div__link">
          {name}
        </NavLink>
      </div>

      <div className="productPrice-div">
        <span className="productPrice-div__span">£{price}</span>
      </div>

      <div className="stockStatus-div">
        <span
          className={`stockStatus-div__span ${
            isInStock ? 'color--green' : 'color--red'
          } `}
        >
          {isInStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      <div className="addToCart-div">
        <button
          type="button"
          className="addToCart-div__button"
          onClick={() => addToCart(id)}
          title="Add to Cart"
        >
          + Add to Cart
        </button>
      </div>

      <div className="reomeFromCart-div">
        <button
          type="button"
          className="reomeFromCart-div__button"
          onClick={() => removeFromCart(id)}
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
