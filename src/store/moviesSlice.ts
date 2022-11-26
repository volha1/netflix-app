/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, deleteById, getAllSorted } from '../api/moviesService';
import Movie from '../entity/Movie';

const fetchMovies = createAsyncThunk('movies/fetchMovies', getAll);
const deleteMovieById = createAsyncThunk('movies/deleteById', deleteById);
const sortMovies = createAsyncThunk('movies/sortMovies', getAllSorted);

type StateType = {
  movies: Movie[];
  movieIdForDeletion: string;
  loadingStatus: boolean;
  errorStatus: boolean;
  sort: { sortBy: string; sortOrder: string; filter: string };
};

const setError = (state: StateType): void => {
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
    sort: {},
  },
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    markMovieForDeletion(state, action) {
      state.movieIdForDeletion = action.payload;
    },
    deleteMovie(state) {
      state.movies = state.movies.filter((movie: Movie) => {
        return movie.id !== state.movieIdForDeletion;
      });
    },
    setSort(state, action) {
      state.sort = { ...state.sort, ...action.payload };
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state: StateType) => {
      state.loadingStatus = true;
    },
    [fetchMovies.fulfilled]: (state: StateType, action: { payload: Movie[] }) => {
      state.loadingStatus = false;
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: setError,
    [deleteMovieById.rejected]: setError,
  },
});

const { deleteMovie, markMovieForDeletion, addMovies, setSort } = moviesSlice.actions;

export { fetchMovies, deleteMovieById, deleteMovie, markMovieForDeletion, sortMovies, addMovies, setSort };
export default moviesSlice.reducer;
