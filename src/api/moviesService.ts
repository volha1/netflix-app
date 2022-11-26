/* eslint-disable import/no-cycle */
import { url } from '../helpers/constants';
import Movie from '../entity/Movie';
import { deleteMovie, addMovies } from '../store/moviesSlice';

const getAll = async (): Promise<Movie[]> => {
  const response = await fetch(`${url}/movies`);

  if (!response.ok) {
    throw new Error();
  }

  const json = await response.json();
  const movies = json.data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      voteAverage: movie.vote_average,
      year: movie.release_date,
      imgPath: movie.poster_path,
      genres: movie.genres,
      overview: movie.overview,
      runtime: movie.runtime,
    };
  });

  return movies;
};

const deleteById = async (id: string, { dispatch }): Promise<void> => {
  const response = await fetch(`${url}/movies/${id}`, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error();
  }

  dispatch(deleteMovie());
};

const getAllSorted = async (_, { dispatch, getState }): Promise<Movie[]> => {
  const { sort } = getState().movies;
  const params = [];

  for (const [key, value] of Object.entries(sort)) {
    if (value) {
      params.push(`${key}=${value}`);
    }
  }

  const response = await fetch(`${url}/movies?${params.join('&')}`);

  if (!response.ok) {
    throw new Error();
  }

  const json = await response?.json();
  const movies = json.data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      voteAverage: movie.vote_average,
      year: movie.release_date,
      imgPath: movie.poster_path,
      genres: movie.genres,
      overview: movie.overview,
      runtime: movie.runtime,
    };
  });

  dispatch(addMovies(movies));
};

export { getAll, deleteById, getAllSorted };
