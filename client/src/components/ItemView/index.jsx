import React, { Component } from 'react';

import ItemInfo from './ItemInfo';
import './ItemView.css';

import { fakeData } from './ItemInfo/fakeData';

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
      </div>
    );
  }
}

export default ItemView;
