import React, { ReactElement, useState, useEffect, useCallback, createContext } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/index';
import Filter from '../components/Filter/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import ModalWrapper from '../components/ModalWrapper/index';
import MovieForm from '../components/Forms/index';
import MoviesList from '../components/MoviesList';
import moviesData from '../helpers/constants';
import './style.scss';
import { ModifyMovieMessage } from '../components/Messages/index';
import Movie from '../entity/Movie';
import MovieDetails from '../components/MovieDetails';
import Context from '../context/Context';

const Main = (): ReactElement => {
  const [movies, setMovies] = useState(moviesData);
  const [isAddMovieFormVisible, setAddMovieFormVisible] = useState(false);
  const [isEditMovieFormVisible, setEditMovieFormVisible] = useState(false);
  const [isAddMovieMessageVisible, setAddMovieMessageVisible] = useState(false);
  const [isEditMovieMessageVisible, setEditMovieMessageVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sort, setSort] = useState('');

  const handleAddMovieForm = useCallback(() => {
    setAddMovieFormVisible(!isAddMovieFormVisible);
  }, [isAddMovieFormVisible]);

  const handleEditMovieForm = useCallback(() => {
    setEditMovieFormVisible(!isEditMovieFormVisible);
  }, [isEditMovieFormVisible]);

  const handleAddMovieMessage = useCallback(() => {
    setAddMovieMessageVisible(!isAddMovieMessageVisible);
  }, [isAddMovieMessageVisible]);

  const handleEditMovieMessage = useCallback(() => {
    setEditMovieMessageVisible(!isEditMovieMessageVisible);
  }, [isEditMovieMessageVisible]);

  useEffect(() => {
    if (sort) {
      setMovies(
        [...movies].sort((a, b) => {
          return (a[sort as keyof Movie] as string).localeCompare(b[sort as keyof Movie] as string);
        })
      );
    }
  }, [sort]);

  return (
    <div className="main">
      <Header handleAddMovieForm={handleAddMovieForm} visible={!selectedMovie} />
      <MovieDetails movie={selectedMovie} selectMovie={setSelectedMovie} />
      <Filter setSort={setSort} />

      <ErrorBoundary>
        <Context.Provider value={handleEditMovieForm}>
          <MoviesList movies={movies} selectMovie={setSelectedMovie} />
        </Context.Provider>
      </ErrorBoundary>

      <ModalWrapper visible={isAddMovieFormVisible}>
        <MovieForm action="Add" handleMovieForm={handleAddMovieForm} handleChangeMovieMessage={handleAddMovieMessage} />
      </ModalWrapper>
      <ModalWrapper visible={isEditMovieFormVisible}>
        <MovieForm
          action="Edit"
          handleMovieForm={handleEditMovieForm}
          handleChangeMovieMessage={handleEditMovieMessage}
        />
      </ModalWrapper>
      <ModalWrapper visible={isAddMovieMessageVisible}>
        <ModifyMovieMessage handleClose={handleAddMovieMessage} text="added to" />
      </ModalWrapper>
      <ModalWrapper visible={isEditMovieMessageVisible}>
        <ModifyMovieMessage handleClose={handleEditMovieMessage} text="edited in" />
      </ModalWrapper>

      <Footer />
    </div>
  );
};

export default Main;
