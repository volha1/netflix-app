import React, { ReactElement, useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/index';
import Filter from '../components/Filter/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import ModalWrapper from '../components/ModalWrapper/index';
import MovieForm from '../components/Forms/index';
import MoviesList from '../components/MoviesList';
import moviesData from '../helpers/constants';
import './style.scss';
import { ModifyMovieWindow } from '../components/ModalWindows/index';
import Movie from '../entity/Movie';
import MovieDetails from '../components/MovieDetails';

const Main = (): ReactElement => {
  const [movies, setMovies] = useState(moviesData);
  const [isAddMovieFormVisible, setAddMovieFormVisible] = useState(false);
  const [isEditMovieFormVisible, setEditMovieFormVisible] = useState(false);
  const [isAddMovieWindowVisible, setAddMovieWindowVisible] = useState(false);
  const [isEditMovieWindowVisible, setEditMovieWindowVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sort, setSort] = useState('');

  const handleAddMovieForm = (): void => {
    setAddMovieFormVisible(!isAddMovieFormVisible);
  };

  const handleEditMovieForm = (): void => {
    setEditMovieFormVisible(!isEditMovieFormVisible);
  };

  const handleAddMovieWindow = (): void => {
    setAddMovieWindowVisible(!isAddMovieWindowVisible);
  };

  const handleEditMovieWindow = (): void => {
    setEditMovieWindowVisible(!isEditMovieWindowVisible);
  };

  useEffect(() => {
    if (sort) {
      setMovies(
        [...movies].sort((a, b) => {
          return (a[sort as keyof Movie] as string).localeCompare(b[sort as keyof Movie] as string);
        })
      );
    }
  }, [sort, movies]);

  return (
    <div className="main">
      <Header handleAddMovieForm={handleAddMovieForm} visible={!selectedMovie} />
      <MovieDetails movie={selectedMovie} selectMovie={setSelectedMovie} />
      <Filter setSort={setSort} />
      <ErrorBoundary>
        <MoviesList handleEditMovieForm={handleEditMovieForm} movies={movies} selectMovie={setSelectedMovie} />
      </ErrorBoundary>

      <ModalWrapper visible={isAddMovieFormVisible}>
        <MovieForm action="Add" handleMovieForm={handleAddMovieForm} handleChangeMovieWindow={handleAddMovieWindow} />
      </ModalWrapper>
      <ModalWrapper visible={isEditMovieFormVisible}>
        <MovieForm
          action="Edit"
          handleMovieForm={handleEditMovieForm}
          handleChangeMovieWindow={handleEditMovieWindow}
        />
      </ModalWrapper>
      <ModalWrapper visible={isAddMovieWindowVisible}>
        <ModifyMovieWindow handleClose={handleAddMovieWindow} text="added to" />
      </ModalWrapper>
      <ModalWrapper visible={isEditMovieWindowVisible}>
        <ModifyMovieWindow handleClose={handleEditMovieWindow} text="edited in" />
      </ModalWrapper>

      <Footer />
    </div>
  );
};

export default Main;
