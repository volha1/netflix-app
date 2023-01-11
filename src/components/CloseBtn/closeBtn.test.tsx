import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CloseBtn from './CloseBtn';

describe('CloseBtn test', () => {
  const onClose = jest.fn();

  it('CloseBtn snapshot', () => {
    const component = renderer.create(<CloseBtn onClose={onClose} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('onClose works', async () => {
    render(<CloseBtn onClose={onClose} />);

    await userEvent.click(screen.getByTestId('close-btn'));

    expect(onClose).toHaveBeenCalled();
  });
});
