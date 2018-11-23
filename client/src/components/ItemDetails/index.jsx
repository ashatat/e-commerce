import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import icons
import { IconContext } from 'react-icons';
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdAddShoppingCart,
  MdPlaylistAdd,
  MdDone,
} from 'react-icons/md';
import {
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaCircleNotch,
} from 'react-icons/fa';

import InputField from '../common/InputField';

import './ItemDetails.css';

class ItemDetails extends Component {
  state = {
    cart: 'default',
    wList: 'default',
    color: '',
    quantity: 0,
    tags: [],
  };

  addToCartButton = {
    adding: (
      <React.Fragment>
        <FaCircleNotch className="item-details__add-to-cart--icon-spin" />{' '}
        ADDING ..
      </React.Fragment>
    ),
    added: (
      <React.Fragment>
        <MdDone /> ITEM ADDED
      </React.Fragment>
    ),
    default: (
      <React.Fragment>
        <MdAddShoppingCart /> ADD TO CART
      </React.Fragment>
    ),
  };

  addToWListButton = {
    adding: <FaCircleNotch className="item-details__add-to-cart--icon-spin" />,
    added: <MdDone />,
    default: (
      <IconContext.Provider value={{ size: '25px' }}>
        <MdPlaylistAdd />
      </IconContext.Provider>
    ),
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

  handelIncrement = e => {
    const { quantity } = this.state;

    if (e.target.className.includes('qty-inc')) {
      this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    } else if (e.target.className.includes('qty-dec') && quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  addToCart = () => {
    const { details, userId, status } = this.props;
    const { color, quantity } = this.state;
    if (color && quantity && (!status || status === 'sale')) {
      this.setState({ cart: 'adding' });
      fetch('/api/v1/add-to-cart', {
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          userId,
          itemDetailId: details[Number(color)].id,
          quantity,
        }),
      }).then(result => {
        if (result.err) {
          // show error modal
        } else {
          this.setState({ cart: 'added' });
          // show adding success modal
          // then reset adding to default
        }
      });
    }
  };

  addToWList = () => {
    const { id, userId } = this.props;

    this.setState({ wList: 'adding' });
    fetch('/api/v1/add-to-wlist', {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        userId,
        itemId: id,
      }),
    }).then(result => {
      if (result.err) {
        // show error modal
      } else {
        this.setState({ wList: 'added' });
        // show adding success modal
        // then reset wList to default
      }
    });
  };

  render() {
    const { name, category, details, description, sku, status } = this.props;
    const { color, quantity, tags, cart, wList } = this.state;

    return (
      <div className="item-details">
        <div className="item-details__head">
          <nav className="item-details__nav">
            <a href="/">Home</a>
            <span> &gt; </span>
            <a href={`/product-category/${category}`}>{category}</a>
            <span> &gt; </span>
            <span>{name}</span>
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
        {status === 'soldout' ? (
          <ul className="item-details__list-color">
            {details.map((item, index) => (
              <li id={index} key={item.id} value={index}>
                {`_${item.color}`}
              </li>
            ))}
          </ul>
        ) : (
          <select
            className="item-details__select-color"
            value={color}
            name="color"
            onChange={this.handelChange}
          >
            <option value="">Choose a Color</option>
            {details.map((item, index) => (
              <option key={item.id} id={index} value={index}>
                {item.color}
              </option>
            ))}
          </select>
        )}
        <div className="item-details__color">
          {color && (
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
          )}
        </div>
        <div className="item-details__form">
          {status === 'soldout' ? (
            ''
          ) : (
            <React.Fragment>
              <div className="item-details__qty">
                <InputField
                  type="text"
                  name="quantity"
                  placeholder={quantity.toString()}
                  value={quantity.toString()}
                  className="item-details__qty-field"
                  onChange={this.handelChange}
                />
                <button
                  onClick={this.handelIncrement}
                  type="button"
                  className="item-details__qty-inc"
                >
                  <IconContext.Provider
                    value={{ style: { pointerEvents: 'none' } }}
                  >
                    <MdKeyboardArrowUp />
                  </IconContext.Provider>
                </button>
                <button
                  onClick={this.handelIncrement}
                  type="button"
                  className="item-details__qty-dec"
                >
                  <IconContext.Provider
                    value={{ style: { pointerEvents: 'none' } }}
                  >
                    <MdKeyboardArrowDown />
                  </IconContext.Provider>
                </button>
              </div>
              <button
                onClick={this.addToCart}
                type="button"
                className={`item-details__add-to-cart ${(!color || !quantity) &&
                  'item-details__add-to-cart--not-allowed'}`}
              >
                {this.addToCartButton[cart]}
              </button>
            </React.Fragment>
          )}
          <button
            onClick={this.addToWList}
            type="button"
            name="Add to wishlist"
            className="item-details__add-to-wishlist"
          >
            {this.addToWListButton[wList]}
          </button>
        </div>
        <div className="item-details__info">
          <div>SKU: {sku}</div>
          <div>
            Category:{' '}
            <a
              className="item-details__info-link"
              href={`/product-category/${category}`}
            >
              {category}
            </a>
          </div>
          <div>
            Tags:{' '}
            {tags.map((item, index) => (
              <React.Fragment key={item.id}>
                <a
                  className="item-details__info-link"
                  href={`/product-tag/${item.name}`}
                >
                  {item.name}
                </a>
                {index === tags.length - 1 ? '' : ', '}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="item-details__share">
          <span className="item-details__share--bold">Share</span>
          {/*
            share links research needed, and add item page url after adding react router routes
          */}
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fatelier.swiftideas.com%2Fproduct%2Fachilles-low%2F"
            className="item-details__share-icons"
          >
            <FaFacebookF />
          </a>
          <a
            href="http://twitter.com/share?text=Achilles%20Low&url=http%3A%2F%2Fatelier.swiftideas.com%2Fproduct%2Fachilles-low%2F"
            className="item-details__share-icons"
          >
            <FaTwitter />
          </a>
          <a
            href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fatelier.swiftideas.com%2Fproduct%2Fachilles-low%2F&media=http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-suade-grey0001_2alt.jpg&description=Achilles%20Low"
            className="item-details__share-icons"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
    );
  }
}

ItemDetails.defaultProps = {
  description: '---',
  sku: '---',
  status: null,
};

ItemDetails.propTypes = {
  id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  sku: PropTypes.string,
  status: PropTypes.string,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      pricing: PropTypes.shape({
        price: PropTypes.string.isRequired,
        discount_price: PropTypes.string.isRequired,
      }),
      color: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default ItemDetails;
