import React, { Component } from 'react';

import './ItemView.css';
import ItemInfo from './ItemInfo';
import ItemReviews from './ItemReviews';

import { fakeData } from './ItemInfo/fakeData';
import ReviewfakeData from './ItemReviews/fakeData';

class ItemView extends Component {
  state = {
    details: null,
  };

  componentDidMount() {
    // fetch the data from backend
    this.setState({ details: fakeData.details });
  }

  render() {
    const { details } = this.state;

    return (
      <div className="item-view">
        <ItemInfo details={details} />
        <ItemReviews reviewsData={ReviewfakeData} />
      </div>
    );
  }
}

export default ItemView;
