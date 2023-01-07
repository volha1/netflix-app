import moviesReducer, { markMovieForDeletion, saveMovieForEditing, clearError } from './moviesSlice';

const initialState = {
  movies: [],
  movieIdForDeletion: '',
  loadingStatus: false,
  error: '',
  movieForEditing: {},
};

describe('moviesSlice', () => {
  it('should return default state when passed empty action', () => {
    const result = moviesReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });
});
