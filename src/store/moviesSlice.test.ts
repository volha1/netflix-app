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

  it('should save movie id with "markMovieForDeletion" action', () => {
    const idForDeletion = '1';
    const action = { type: markMovieForDeletion.type, payload: idForDeletion };
    const result = moviesReducer(initialState, action);
    expect(result.movieIdForDeletion).toBe(idForDeletion);
  });

  it('should save movie id with "saveMovieForEditing" action', () => {
    const movieForEditing = {
      id: '1',
      title: 'title',
      voteAverage: '10',
      releaseDate: '2022',
      imgPath: 'https://test.com',
      genres: ['Horror'],
      overview: 'overview text',
      runtime: 110,
    };
    const action = { type: saveMovieForEditing.type, payload: movieForEditing };
    const result = moviesReducer(initialState, action);
    expect(result.movieForEditing).toBe(movieForEditing);
  });

  it('should clear error message with "clearError" action', () => {
    const stateForTesting = {
      movies: [],
      movieIdForDeletion: '',
      loadingStatus: false,
      error: 'message',
      movieForEditing: {},
    };
    const action = { type: clearError.type, payload: '' };
    const result = moviesReducer(stateForTesting, action);
    expect(result.error).toBe('');
  });
});
