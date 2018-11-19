import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ZoomImg extends Component {
  state = {
    imageX: 0,
    imageY: 0,
    imageSize: 0.5,
  };

  canvaRef = React.createRef();

  image = new Image();

  componentDidMount() {
    const { imgSrc } = this.props;
    const { image } = this;

    image.src = imgSrc;
    image.onload = this.drawImage;
  }

  componentDidUpdate() {
    const { currentIndex, id } = this.props;
    const { drawImage } = this;

    // redraw only when it is the current image
    if (currentIndex.toString() === id[3]) {
      drawImage();
    }
  }

  drawImage = () => {
    const { canvaRef: canvas, image } = this;
    const { imageX, imageY, imageSize } = this.state;
    const ctx = canvas.current.getContext('2d');

    if (image) {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      ctx.drawImage(
        image,
        imageX,
        imageY,
        image.naturalWidth * imageSize,
        image.naturalHeight * imageSize
      );
    }
  };

  handlMouseMove = e => {
    const { clientX, clientY } = e;

    this.setState({
      imageSize: 1,
      imageX: clientX * (1 - 2), // (clientX * (1 - zoomValue))
      imageY: clientY * -1,
    });
  };

  handlMouseLeave = () => {
    this.setState({
      imageX: 0,
      imageY: 0,
      imageSize: 0.5,
    });
  };

  render() {
    const { id } = this.props;

    return (
      <canvas
        onMouseMove={this.handlMouseMove}
        onMouseLeave={this.handlMouseLeave}
        width="614"
        height="793"
        ref={this.canvaRef}
        className="item-pic__img"
        id={id}
      />
    );
  }
}

ZoomImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default ZoomImg;
