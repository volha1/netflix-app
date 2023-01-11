import React from 'react';
import renderer from 'react-test-renderer';
import * as reduxHooks from 'react-redux';

import MovieList from './MovieList';
import Movie from '../../types/Movie';

jest.mock('react-redux');

describe('MovieList test', () => {
  const setParams = jest.fn();
  const movies = [] as Movie[];

  it('MovieList snapshot', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
    const component = renderer.create(<MovieList setParams={setParams} movies={movies} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
