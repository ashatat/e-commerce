import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Tag from './Tag';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tag name="SALE" color="white" bgColor="#ea5f50" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('has a valid snapshot', () => {
  const component = renderer
    .create(<Tag name="SALE" color="white" bgColor="#ea5f50" />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
