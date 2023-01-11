import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reduxHooks from 'react-redux';

import MovieDetails from './MovieDetails';

jest.mock('react-redux');

describe('MovieDetails test', () => {
  const removeSearchParams = jest.fn();
  jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
  jest.spyOn(React, 'useMemo').mockReturnValue({
    id: '1',
    title: 'title',
    voteAverage: '10',
    releaseDate: '2022',
    imgPath: 'https://test.com',
    genres: ['Horror'],
    overview: 'overview text',
    runtime: 110,
  });

  it('MovieDetails snapshot', () => {
    const component = renderer.create(<MovieDetails removeSearchParams={removeSearchParams} movieId="" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('removeSearchParams function works', async () => {
    render(<MovieDetails removeSearchParams={removeSearchParams} movieId="" />);

    await userEvent.click(screen.getByTestId('search-icon'));

    expect(removeSearchParams).toHaveBeenCalledWith('movie');
  });
});
