import React, { Component } from 'react';
import Card from './ItemCard';
import fakeData from './fakeData';

export default class Shop extends Component {
  state = {};

  render() {
    return (
      <div className="items-list">
        {fakeData &&
          fakeData.map((item, i) => <Card key={i.toString()} item={item} />)}
      </div>
    );
  }
}
