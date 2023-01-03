import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu';

it('renders Menu snapshot', () => {
  const component = renderer.create(<Menu />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
