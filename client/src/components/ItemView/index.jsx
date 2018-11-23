import React, { Component } from 'react';

import ItemInfo from './ItemInfo';

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
      <div>
        <ItemInfo details={details} />
      </div>
    );
  }
}

export default ItemView;
