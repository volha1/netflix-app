import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { url } from '../helpers/constants';
import Movie from '../types/Movie';

type StateType = {
  movies: Movie[];
  movieIdForDeletion: string;
  loadingStatus: boolean;
  error: string;
  movieForEditing: Movie;
};

const setError = (state: StateType, action): void => {
  state.loadingStatus = false;
  state.error = action.error.message;
};

const deleteMovieById = createAsyncThunk('movies/deleteById', async (id: string): Promise<void> => {
  const response = await fetch(`${url}/movies/${id}`, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
});

const getAllMoviesSorted = createAsyncThunk('movies/sortMovies', async (params): Promise<void> => {
  const requestParams = [];

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      requestParams.push(`${key}=${value}`);
    }
  }

  const response = await fetch(`${url}/movies?${requestParams.join('&')}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response?.json();
  const movies = json.data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      voteAverage: movie.vote_average,
      releaseDate: movie.release_date,
      imgPath: movie.poster_path,
      genres: movie.genres,
      overview: movie.overview,
      runtime: movie.runtime,
    };
  });

  return movies;
});

const createMovie = createAsyncThunk('movies/createMovie', async (movie: Movie): Promise<void> => {
  const movieItem = {
    title: movie.title,
    vote_average: Number(movie.voteAverage),
    poster_path: movie.imgPath,
    overview: movie.overview,
    runtime: Number(movie.runtime),
    genres: movie.genres,
  };

  if (movie.releaseDate) {
    movieItem.release_date = movie.releaseDate;
  }

  const response = await fetch(`${url}/movies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movieItem),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
});

const updateMovie = createAsyncThunk('movies/createMovie', async (movie: Movie): Promise<any> => {
  const movieItem = {
    id: movie.id,
    title: movie.title,
    vote_average: Number(movie.voteAverage),
    poster_path: movie.imgPath,
    overview: movie.overview,
    runtime: Number(movie.runtime),
    genres: movie.genres,
  };

  if (movie.releaseDate) {
    movieItem.release_date = movie.releaseDate;
  }

  const response = await fetch(`${url}/movies`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movieItem),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieIdForDeletion: '',
    loadingStatus: false,
    error: '',
    movieForEditing: {},
  },
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    markMovieForDeletion(state, action) {
      state.movieIdForDeletion = action.payload;
    },
    saveMovieForEditing(state, action) {
      state.movieForEditing = action.payload;
    },
    clearError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [getAllMoviesSorted.pending.toString()]: (state: StateType) => {
      state.loadingStatus = true;
    },
    [getAllMoviesSorted.fulfilled.toString()]: (state: StateType, action: { payload: Movie[] }) => {
      state.loadingStatus = false;
      state.movies = action.payload;
    },
    [getAllMoviesSorted.rejected.toString()]: setError,
    [deleteMovieById.fulfilled.toString()]: (state: StateType) => {
      state.movies = state.movies.filter((movie: Movie) => {
        return movie.id !== state.movieIdForDeletion;
      });
    },
    [deleteMovieById.rejected.toString()]: setError,
    [createMovie.rejected.toString()]: setError,
  },
});

const { markMovieForDeletion, saveMovieForEditing, addMovies, clearError } = moviesSlice.actions;

export {
  markMovieForDeletion,
  addMovies,
  saveMovieForEditing,
  deleteMovieById,
  getAllMoviesSorted,
  createMovie,
  updateMovie,
  clearError,
};
export default moviesSlice.reducer;
