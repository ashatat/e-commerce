import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdAddShoppingCart,
  MdPlaylistAdd,
} from 'react-icons/md';
import { FaPinterest, FaFacebookF, FaTwitter } from 'react-icons/fa';

import InputField from '../common/InputField';

import './ItemDetails.css';

class ItemDetails extends Component {
  state = {
    color: '',
    quantity: 0,
    tags: [
      {
        id: '1',
        name: 'Backpack',
      },
      {
        id: '2',
        name: 'Accessories',
      },
    ],
  };

  prevItem = () => {
    // go to previous item
  };

  nextItem = () => {
    // go to next item
  };

  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearSelection = () => {
    this.setState({ color: '' });
  };

  render() {
    const { name, category, details, description, sku } = this.props;
    const { color, quantity, tags } = this.state;

    return (
      <div className="item-details">
        <div className="item-details__head">
          <nav className="item-details__nav">
            <a href="#">Home</a>
            <span> &gt; </span>
            <a href="#">{category}</a>
            <span> &gt; </span>
            <a>{name}</a>
          </nav>
          <div className="item-details__navigation">
            <button
              className="item-details__nav-button"
              type="button"
              onClick={this.prevItem}
            >
              &lt;
            </button>
            <button
              className="item-details__nav-button"
              type="button"
              onClick={this.nextItem}
            >
              &gt;
            </button>
          </div>
          <h1 className="item-details__header">{name}</h1>
        </div>
        <div className="item-details__price">
          <del className="item-details__del">
            &pound;
            {360}
          </del>
          <ins className="item-details__ins">
            {' '}
            &pound;
            {305}
            -&pound;
            {360}
          </ins>
        </div>
        <p className="item-details__desc">{description}</p>
        <select
          className="item-details__select-color"
          value={color}
          name="color"
          onChange={this.handelChange}
        >
          <option value="">Choose a Color</option>
          {details.map((item, index) => (
            <option id={index} value={index}>
              {item.color}
            </option>
          ))}
        </select>
        <div className="item-details__color">
          {color ? (
            <React.Fragment>
              <button
                className="item-details__clear-color"
                type="button"
                onClick={this.clearSelection}
              >
                Clear Selection
              </button>
              <div className="item-details__price item-details__item-price">
                {Number(details[color].pricing.discount_price) ? (
                  <del className="item-details__del item-details__del--gray">
                    &pound;
                    {Number(details[color].pricing.price)}
                  </del>
                ) : (
                  ''
                )}
                <ins className="item-details__ins">
                  {' '}
                  &pound;
                  {Number(details[color].pricing.price) -
                    Number(details[color].pricing.discount_price)}
                </ins>
              </div>
            </React.Fragment>
          ) : (
            ''
          )}
        </div>
        <div className="item-details__form">
          <div className="item-details__qty">
            <InputField
              type="text"
              name="quantity"
              placeholder={quantity}
              value={quantity}
              className="item-details__qty-field"
              onChange={this.handelChange}
            />
            <button type="button" className="item-details__qty-inc">
              <MdKeyboardArrowUp />
            </button>
            <button type="button" className="item-details__qty-dec">
              <MdKeyboardArrowDown />
            </button>
          </div>
          <button type="button" className="item-details__add-to-cart">
            <MdAddShoppingCart /> ADD TO CART
          </button>
          <button
            type="button"
            name="Add to wishlist"
            className="item-details__add-to-wishlist"
          >
            <IconContext.Provider value={{ size: '25px' }} >
              <MdPlaylistAdd />
            </IconContext.Provider>
          </button>
        </div>
        <div className="item-details__info">
          <span>SKU: {sku}</span>
          <span>Category: {category}</span>
          <span>
            Tags:{' '}
            {tags.map(item => (
              <span key={item.id}>{item.name}</span>
            ))}
          </span>
        </div>
        <div className="item-details__share">
          <span className="item-details__share--bold">Share</span>
          {/* // share links research needed */}
          <a href="" className="item-details__share-icons">
              <FaFacebookF />
          </a>
          <a href="" className="item-details__share-icons">
              <FaTwitter />
          </a>
          <a href="" className="item-details__share-icons">
              <FaPinterest />
          </a>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
