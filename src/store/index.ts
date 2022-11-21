import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import movieReducer from './movieReducer';

const store = createStore(movieReducer, applyMiddleware(thunk));
// const store = configureStore(movieReducer, applyMiddleware(thunk));

export default store;
