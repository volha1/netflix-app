import React, { ReactElement } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MoviesList from '../components/MoviesList';
import './style.scss';

const Main = (): ReactElement => {
  return (
    <div className="main">
      <Header />
      <Filter />
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Main;
