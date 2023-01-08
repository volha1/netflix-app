import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import * as reduxHooks from 'react-redux';
import { render, screen } from '@testing-library/react';
import * as actions from '../../store/moviesSlice';

import MovieCard from './MovieCard';

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('MovieCard test', () => {
  const movie = {
    id: '1',
    title: 'title',
    voteAverage: '10',
    releaseDate: '2022',
    imgPath: 'https://test.com',
    genres: ['Horror'],
    overview: 'overview text',
    runtime: 110,
  };
  const onClick = jest.fn();
  const dispatch = jest.fn();
  mockedDispatch.mockReturnValue(dispatch);

  it('MovieCard snapshot', () => {
    const component = renderer.create(<MovieCard movie={movie} onClick={onClick} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('onClick function works', async () => {
    render(<MovieCard movie={movie} onClick={onClick} />);

    await userEvent.click(screen.getByTestId('card'));

    expect(onClick).toHaveBeenCalledWith({ movie: movie.id });
  });

  it('dispatch for "markMovieForDeletion" works', async () => {
    const mockedMarkMovieForDeletion = jest.spyOn(actions, 'markMovieForDeletion');

    render(<MovieCard movie={movie} onClick={onClick} />);

    await userEvent.click(screen.getByTestId('delete-btn'));

    expect(dispatch).toHaveBeenCalled();
    expect(mockedMarkMovieForDeletion).toHaveBeenCalledWith(movie.id);
  });

  it('dispatch for "saveMovieForEditing" works', async () => {
    const mockedSaveMovieForEditing = jest.spyOn(actions, 'saveMovieForEditing');

    render(<MovieCard movie={movie} onClick={onClick} />);

    await userEvent.click(screen.getByTestId('edit-btn'));

    expect(dispatch).toHaveBeenCalled();
    expect(mockedSaveMovieForEditing).toHaveBeenCalledWith(movie);
  });
});
