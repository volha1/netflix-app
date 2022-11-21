import types from './actionTypes';

const defaultState = {
  movies: [],
  movieIdForDeletion: '',
};

const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_ALL_MOVIES:
      return { ...state, movies: [...action.payload] };
    case types.MARK_FOR_DELETION:
      return { ...state, movieIdForDeletion: action.payload };
    case types.DELETE_MOVIE:
      return { ...state, movies: state.movies.filter((movie) => movie.id !== state.movieIdForDeletion) };
    default:
      return state;
  }
};

export default movieReducer;
