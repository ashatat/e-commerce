import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { MdAddShoppingCart, MdDone } from 'react-icons/md';

import { FaClipboardList, FaCircleNotch } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';

import './QuickNav.css';

class QuickNav extends Component {
  state = {
    addToCartStatus: 'default',
    addToWishStatus: 'default',
  };

  addToCartButton = {
    adding: (
      <div className="quick-nav__add-to-cart--icon-spin">
        <IconContext.Provider value={{ size: '23px' }}>
          <FaCircleNotch className="quick-nav__add-to-cart--icon-spin" />
        </IconContext.Provider>
      </div>
    ),
    added: (
      <IconContext.Provider
        value={{
          size: '23px',
          color: '#eabe12',
        }}
      >
        <MdDone />
      </IconContext.Provider>
    ),
    default: (
      <IconContext.Provider value={{ size: '23px' }}>
        <MdAddShoppingCart />
      </IconContext.Provider>
    ),
  };

  addToWishlistButton = {
    adding: (
      <div className="quick-nav__add-to-cart--icon-spin">
        <IconContext.Provider value={{ size: '23px' }}>
          <FaCircleNotch className="quick-nav__add-to-cart--icon-spin" />
        </IconContext.Provider>
      </div>
    ),
    added: (
      <IconContext.Provider
        value={{
          size: '23px',
          color: '#eabe12',
        }}
      >
        <MdDone />
      </IconContext.Provider>
    ),
    default: (
      <IconContext.Provider value={{ size: '23px' }}>
        <FaClipboardList />
      </IconContext.Provider>
    ),
  };

  addToCart = e => {
    const { addToCartStatus } = this.state;
    e.preventDefault();
    this.setState({
      addToCartStatus: 'adding',
    });
    if (addToCartStatus === 'adding') {
      setTimeout(() => {
        this.setState({
          addToCartStatus: 'added',
        });
      }, 1000);
    }
  };

  addToWishList = e => {
    const { addToWishStatus } = this.state;
    e.preventDefault();
    this.setState({
      addToWishStatus: 'adding',
    });
    if (addToWishStatus === 'adding') {
      setTimeout(() => {
        this.setState({
          addToWishStatus: 'added',
        });
      }, 1000);
    }
  };

  showQuickView = e => {
    e.preventDefault();
    // slider will pop up with the item details
  };

  render() {
    const { addToCartStatus, addToWishStatus } = this.state;
    return (
      <ul className="quick-nav">
        <li className="quick-nav__item tooltip">
          <button
            className="quick-nav__button"
            type="button"
            onClick={this.addToCart}
            name="Add to cart"
          >
            {this.addToCartButton[addToCartStatus]}
          </button>
        </li>
        <li className="quick-nav__item">
          <button
            className="quick-nav__button"
            type="button"
            onClick={this.addToWishList}
            name="View wishlist"
          >
            {this.addToWishlistButton[addToWishStatus]}
          </button>
        </li>
        <li className="quick-nav__item">
          <button
            className="quick-nav__button"
            type="button"
            onClick={this.showQuickView}
            name="Quickview"
          >
            <IconContext.Provider value={{ size: '23px' }}>
              <FiEye />
            </IconContext.Provider>
          </button>
        </li>
      </ul>
    );
  }
}

export default QuickNav;
