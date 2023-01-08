/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { url } from '../helpers/constants';
import Movie from '../types/Movie';

type MovieItem = {
  id?: any;
  title: any;
  vote_average: any;
  release_date?: any;
  poster_path: any;
  genres: any;
  overview: any;
  runtime: any;
};

const deleteMovieById = createAsyncThunk('movies/deleteById', async (id: string): Promise<void> => {
  const response = await fetch(`${url}/movies/${id}`, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
});

const getAllMoviesSorted = createAsyncThunk<Movie[], any>('movies/sortMovies', async (params): Promise<Movie[]> => {
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
  const movies = json.data.map((movie: MovieItem) => {
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
  const movieItem: MovieItem = {
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
  const movieItem: MovieItem = {
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

const isError = (action: AnyAction): boolean => {
  return action.type.endsWith('rejected');
};

const moviesSlice: any = createSlice({
  name: 'movies',
  initialState: {
    movies: [] as Movie[],
    movieIdForDeletion: '',
    loadingStatus: false,
    error: '',
    movieForEditing: {},
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(getAllMoviesSorted.pending, (state) => {
      state.loadingStatus = true;
    });
    builder.addCase(getAllMoviesSorted.fulfilled, (state, action) => {
      state.loadingStatus = false;
      state.movies = action.payload;
    });
    builder.addCase(deleteMovieById.fulfilled, (state) => {
      state.movies = state.movies.filter((movie: Movie) => {
        return movie.id !== state.movieIdForDeletion;
      });
    });
    builder.addMatcher(isError, (state, action) => {
      state.loadingStatus = false;
      state.error = action.error.message || 'Server error';
    });
  },
});

const { markMovieForDeletion, saveMovieForEditing, clearError } = moviesSlice.actions;

export {
  markMovieForDeletion,
  saveMovieForEditing,
  deleteMovieById,
  getAllMoviesSorted,
  createMovie,
  updateMovie,
  clearError,
};
export default moviesSlice.reducer;
