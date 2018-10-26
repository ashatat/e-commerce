import React , { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import './item-pic.css';

class ItemPic extends Component {

  state = {
    currentIndex:0,
    translateValue:0
  }
  
  slideWidth = (element) => {
    if (element === 'current_img'){
      return document.querySelector(`#img${this.state.currentIndex}`).clientWidth;
    }
    if (element === 'slider') {
      let sliderWidth = document.querySelector(`#img${this.state.currentIndex}`).clientWidth;
      this.props.picArr.forEach((item, index) => {
        sliderWidth -= document.querySelector(`#img${index}`).clientWidth;
      })
      return sliderWidth;
    }
  }

  nextImg = () => {
    if (this.state.currentIndex === this.props.picArr.length-1) {
      this.setState({
        currentIndex:0,
        translateValue:0
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        translateValue: this.state.translateValue - this.slideWidth('current_img')
      })
    }
  }

  prevImg = () => {
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex:this.props.picArr.length-1,
        translateValue:this.slideWidth('slider')
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        translateValue: this.state.translateValue + this.slideWidth('current_img')
      })
    }
  }

  componentDidMount () {
    window.addEventListener('resize', () => {
      this.setState({
        currentIndex:0,
        translateValue:0
      })
    })
  }

  componentWillUnmount () {
    window.removeEventListener('resize');
  }

  render() {
    return(
      <div className="item_pic">
        <div className="slider" style={{transform: `translateX(${this.state.translateValue}px)`}} >
          {this.props.picArr.map((picUrl, index) => {
            // replace img with ZoomImg compoenet when it's ready
            return <img key={index} id={`img${index}`} src={picUrl} alt="item" />
          })}
        
        </div>
        <button onClick={this.nextImg}>next</button>
        <button onClick={this.prevImg}>previous</button>
      </div>
    );
  }
}

export default ItemPic;
