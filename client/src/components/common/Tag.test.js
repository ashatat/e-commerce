import React from 'react';
import renderer from 'react-test-renderer';
import Tag from './Tag';

test('Tag componet render', () => {
  const component = renderer
    .create(<Tag name="SALE" color="white" bgColor="#ea5f50" />)
    .toJSON();

  console.log(component);
  expect(component).toMatchSnapshot();
});
