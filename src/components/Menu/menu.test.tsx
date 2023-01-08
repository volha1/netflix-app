import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Menu from './Menu';

describe('Menu test', () => {
  const onClose = jest.fn();
  const onDelete = jest.fn();
  const onEdit = jest.fn();

  it('Menu snapshot', () => {
    const component = renderer.create(<Menu isVisible onClose={onClose} onDelete={onDelete} onEdit={onEdit} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('onEdit works', async () => {
    render(<Menu isVisible onClose={onClose} onDelete={onDelete} onEdit={onEdit} />);

    await userEvent.click(screen.getByTestId('edit-btn'));

    expect(onEdit).toHaveBeenCalled();
  });

  it('onDelete works', async () => {
    render(<Menu isVisible onClose={onClose} onDelete={onDelete} onEdit={onEdit} />);

    await userEvent.click(screen.getByTestId('delete-btn'));

    expect(onDelete).toHaveBeenCalled();
  });
});
