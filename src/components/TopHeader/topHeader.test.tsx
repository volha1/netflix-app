import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TopHeader from './TopHeader';

describe('TopHeader test', () => {
  const onAddMovieForm = jest.fn();

  it('TopHeader snapshot', () => {
    const component = renderer.create(<TopHeader onAddMovieForm={onAddMovieForm} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('onAddMovieForm works', async () => {
    render(<TopHeader onAddMovieForm={onAddMovieForm} />);

    await userEvent.click(screen.getByRole('button'));

    expect(onAddMovieForm).toHaveBeenCalled();
  });
});
