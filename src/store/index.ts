import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './moviesSlice';

const store = configureStore({ reducer: { movies: movieReducer } });

type AppDispatch = typeof store.dispatch;

export { store, AppDispatch };
