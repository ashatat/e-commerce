import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ItemCard.css';
import Tag from '../common/Tag/Tag';

export default function Card({ item }) {
  const { name, currencey, price, salePrice, category, status, images } = item;

  const ProperTag = {
    stock: null,
    sale: <Tag name="SALE" color="white" bgColor="#ea5f50" />,
    soldout: <Tag name="SOLD OUT" color="white" bgColor="#ccc" />,
  };

  const LinkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <div className="item">
      <Link to="/">
        <div className="item__img-container">
          <div className="item__widget">{ProperTag[status]}</div>
          <img className="item__img item__img-1" src={images[0]} alt={name} />
          <img
            className="item__img item__img-2 hidden"
            src={images[1]}
            alt={name}
          />
        </div>
      </Link>
      <div className="item__detials">
        <h3 className="item__name">
          <Link to="/product/:prodectName" style={LinkStyle}>
            {name}
          </Link>
        </h3>
        <p className="item__category">
          <Link to="/product-category/sweaters" style={LinkStyle}>
            {category}
          </Link>
        </p>
        {!salePrice ? (
          <p className="item__price">{currencey + price}</p>
        ) : (
          <Fragment>
            <p className="item__price">
              <s className="old-price">{currencey + price}</s>
            </p>
            <p className="item__sale-price">{`${currencey}${salePrice}–${currencey}${price}`}</p>
          </Fragment>
        )}

        {/* Only temp Should be a common component */}
        <div className="item__stars-rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.node.isRequired,
};
