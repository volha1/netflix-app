import Movie from '../entity/Movie';
import types from './actionTypes';

const addAllMovies = (payload: Array<Movie>): { type: string; payload: Array<Movie> } => {
  return {
    type: types.ADD_ALL_MOVIES,
    payload,
  };
};

const markForDeletion = (payload) => ({ type: types.MARK_FOR_DELETION, payload });

const deleteMovie = () => ({ type: types.DELETE_MOVIE });

export { addAllMovies, markForDeletion, deleteMovie };
