import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';

import InputField from '../common/InputField';

import './ItemDetails.css';

class ItemDetails extends Component {
  state = {
    color: '',
    quantity: 0,
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
    const { name, category, details, description } = this.props;
    const { color, quantity } = this.state;

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
              <ExpandLess />
            </button>
            <button type="button" className="item-details__qty-dec">
              <ExpandMore />
            </button>
          </div>
          <button type="button" className="item-details__add-to-cart">
            <AddShoppingCart /> ADD TO CART
          </button>
          <button
            type="button"
            name="Add to wishlist"
            className="item-details__add-to-wishlist"
          >
            <PlaylistAdd />
          </button>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
