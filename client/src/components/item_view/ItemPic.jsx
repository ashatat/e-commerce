import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ZoomImg from './ZoomImg';
import './item-pic.css';

class ItemPic extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0,
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  slideWidth = element => {
    const { currentIndex } = this.state;
    const { picArr } = this.props;

    let sliderWidth;

    if (element === 'current_img') {
      sliderWidth = document.querySelector(`#img${currentIndex}`).clientWidth;
    }
    if (element === 'slider') {
      sliderWidth = document.querySelector(`#img${currentIndex}`).clientWidth;
      picArr.forEach((item, index) => {
        sliderWidth -= document.querySelector(`#img${index}`).clientWidth;
      });
    }
    return sliderWidth;
  };

  nextImg = () => {
    const { currentIndex, translateValue } = this.state;
    const { picArr } = this.props;

    if (currentIndex === picArr.length - 1) {
      this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    } else {
      this.setState({
        currentIndex: currentIndex + 1,
        translateValue: translateValue - this.slideWidth('current_img'),
      });
    }
  };

  prevImg = () => {
    const { currentIndex, translateValue } = this.state;
    const { picArr } = this.props;

    if (currentIndex === 0) {
      this.setState({
        currentIndex: picArr.length - 1,
        translateValue: this.slideWidth('slider'),
      });
    } else {
      this.setState({
        currentIndex: currentIndex - 1,
        translateValue: translateValue + this.slideWidth('current_img'),
      });
    }
  };

  clickedImg = e => {
    const { currentIndex, translateValue } = this.state;
    const translateAdd =
      (currentIndex - Number(e.target.id)) * this.slideWidth('current_img');

    this.setState({
      currentIndex: Number(e.target.id),
      translateValue: translateValue + translateAdd,
    });
  };

  render() {
    const { translateValue, currentIndex } = this.state;
    const { picArr } = this.props;
    return (
      <div className="item-pic">
        <div className="item-pic__slider">
          <div
            className="item-pic__images"
            style={{ transform: `translateX(${translateValue}px)` }}
          >
            {picArr.map((pic, index) => (
              <ZoomImg
                currentIndex={currentIndex}
                imgSrc={pic.url}
                key={pic.id}
                id={`img${index}`}
              />
            ))}
          </div>
          <div className="item-pic__navigation">
            <button
              className="item-pic__nav-button"
              type="button"
              onClick={this.prevImg}
            >
              &lt;
            </button>
            <button
              className="item-pic__nav-button"
              type="button"
              onClick={this.nextImg}
            >
              &gt;
            </button>
          </div>
        </div>
        <ul className="item-pic__thumbnails">
          {picArr.map((pic, index) => (
            /* eslint-disable jsx-a11y/click-events-have-key-events */
            <li
              key={pic.id}
              className={`item-pic__thumbnail ${
                index === currentIndex ? 'item-pic__active' : ''
              }`}
            >
              <div
                role="button"
                id={index}
                tabIndex="0"
                onClick={this.clickedImg}
                className="item-pic__overlay"
              />
              <img
                className="item-pic__thumbnail-img"
                src={pic.url}
                alt="thumbnail"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ItemPic.propTypes = {
  picArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ItemPic;
