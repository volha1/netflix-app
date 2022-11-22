import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, deleteById } from '../api/moviesService';

const fetchMovies = createAsyncThunk('movies/fetchMovies', getAll);
const deleteMovieById = createAsyncThunk('movies/deleteById', deleteById);

const setError = (state): void => {
  state.loadingStatus = false;
  state.errorStatus = true;
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieIdForDeletion: '',
    loadingStatus: false,
    errorStatus: false,
  },
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    markMovieForDeletion(state, action) {
      state.movieIdForDeletion = action.payload;
    },
    deleteMovie(state) {
      state.movies = state.movies.filter((movie) => movie.id !== state.movieIdForDeletion);
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loadingStatus = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loadingStatus = false;
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: setError,
    [deleteMovieById.rejected]: setError,
  },
});

const { deleteMovie, markMovieForDeletion } = moviesSlice.actions;

export { fetchMovies, deleteMovieById, deleteMovie, markMovieForDeletion };
export default moviesSlice.reducer;
