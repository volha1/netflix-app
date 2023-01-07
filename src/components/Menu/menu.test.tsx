import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu';

it('Menu snapshot', () => {
  const onClose = jest.fn();
  const onDelete = jest.fn();
  const onEdit = jest.fn();
  const component = renderer.create(<Menu isVisible onClose={onClose} onDelete={onDelete} onEdit={onEdit} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
