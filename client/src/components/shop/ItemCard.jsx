import React from 'react';
import PropTypes from 'prop-types';
import './ItemCard.css';
import Tag from '../common/Tag/Tag';

export default function Card({ img1, img2 }) {
  return (
    <div className="item">
      <div className="item__img-container">
        <div className="item__widget">
          <Tag name="SALE" />
        </div>
        <img className="item__img item__img-1" src={img1} alt="sun glasses" />
        <img
          className="item__img item__img-2 hidden"
          src={img2}
          alt="sun glasses"
        />
      </div>
      <div className="item__detials">
        <h3 className="item__name">Biblio Sunglasses</h3>
        <p className="item__category">Accessories</p>
        <p className="item__price">£80</p>

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
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
};
