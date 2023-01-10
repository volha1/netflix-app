import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MovieForm from './MovieForm';

describe('MovieForm test', () => {
  const actionText = '';
  const onCloseMovieForm = jest.fn();
  const onSubmit = jest.fn();
  const movie = {
    id: '',
    title: '',
    voteAverage: '',
    releaseDate: '',
    imgPath: '',
    genres: [],
    overview: '',
    runtime: 0,
  };

  it('MovieForm snapshot', () => {
    const component = renderer.create(
      <MovieForm actionText={actionText} onCloseMovieForm={onCloseMovieForm} onSubmit={onSubmit} movie={movie} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('onSubmit works', async () => {
    render(<MovieForm actionText={actionText} onCloseMovieForm={onCloseMovieForm} onSubmit={onSubmit} movie={movie} />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/title/i), 'title');
    await user.type(screen.getByLabelText(/movie url/i), 'https://test.com');
    await user.type(screen.getByLabelText(/rating/i), '8');
    await user.type(screen.getByLabelText(/runtime/i), '120');
    await user.type(screen.getByLabelText(/overview/i), 'overview');
    await user.click(screen.getByTestId('select-title'));
    await user.click(screen.getByTestId('horror'));
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalled();
    await waitFor(() => {
      return expect(onSubmit).toHaveBeenCalledWith({
        id: '',
        title: 'title',
        imgPath: 'https://test.com',
        genres: ['horror'],
        voteAverage: '8',
        runtime: '0120',
        overview: 'overview',
        releaseDate: '',
      });
    });
  });
});
