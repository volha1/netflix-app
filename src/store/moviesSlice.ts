import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { url } from '../helpers/constants';
import Movie from '../entity/Movie';

type StateType = {
  movies: Movie[];
  movieIdForDeletion: string;
  loadingStatus: boolean;
  errorStatus: boolean;
  sort: { sortBy: string; sortOrder: string; filter: string };
  movieForEditing: Movie;
};

const setError = (state: StateType): void => {
  state.loadingStatus = false;
  state.errorStatus = true;
};

const getAllMovies = createAsyncThunk('movies/fetchMovies', async (): Promise<Movie[]> => {
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
      releaseDate: movie.release_date,
      imgPath: movie.poster_path,
      genres: movie.genres,
      overview: movie.overview,
      runtime: movie.runtime,
    };
  });

  return movies;
});

const deleteMovieById = createAsyncThunk('movies/deleteById', async (id: string): Promise<void> => {
  const response = await fetch(`${url}/movies/${id}`, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error();
  }
});

const getAllMoviesSorted = createAsyncThunk('movies/sortMovies', async (params, { dispatch }): Promise<void> => {
  const requestParams = [];

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      requestParams.push(`${key}=${value}`);
    }
  }

  const response = await fetch(`${url}/movies?${requestParams.join('&')}`);

  if (!response.ok) {
    throw new Error();
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
    throw new Error();
  }
});

const updateMovie = createAsyncThunk('movies/createMovie', async (movie: Movie): Promise<void> => {
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
    throw new Error();
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieIdForDeletion: '',
    loadingStatus: false,
    errorStatus: false,
    sort: {},
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
  },
  extraReducers: {
    [getAllMovies.pending]: (state: StateType) => {
      state.loadingStatus = true;
    },
    [getAllMovies.fulfilled]: (state: StateType, action: { payload: Movie[] }) => {
      state.loadingStatus = false;
      state.movies = action.payload;
    },
    [getAllMovies.rejected]: setError,
    [deleteMovieById.fulfilled]: (state: StateType) => {
      state.movies = state.movies.filter((movie: Movie) => {
        return movie.id !== state.movieIdForDeletion;
      });
    },
    [deleteMovieById.rejected]: setError,
    [getAllMoviesSorted.fulfilled]: (state: StateType, action: { payload: Movie[] }) => {
      state.loadingStatus = false;
      state.movies = action.payload;
    },
  },
});

const { markMovieForDeletion, saveMovieForEditing, addMovies } = moviesSlice.actions;

export { markMovieForDeletion, addMovies, saveMovieForEditing, getAllMovies, deleteMovieById, getAllMoviesSorted, createMovie, updateMovie };
export default moviesSlice.reducer;
