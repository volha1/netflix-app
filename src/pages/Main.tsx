import React, { ReactElement, useState, useEffect, useMemo } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/index';
import Filter from '../components/Filter/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import ModalWrapper from '../components/ModalWrapper/index';
import MovieForm from '../components/Forms/index';
import MoviesList from '../components/MoviesList';
import moviesData from '../helpers/constants';
import './style.scss';
import { ModifyMovieMessage, DeleteMovieMessage } from '../components/Messages/index';
import Movie from '../entity/Movie';
import MovieDetails from '../components/MovieDetails';
import Context from '../context/Context';
import useToggle from '../hooks/useToggle';

const Main = (): ReactElement => {
  const [movies, setMovies] = useState(moviesData);
  const [isAddMovieFormVisible, toggleAddMovieForm] = useToggle();
  const [isEditMovieFormVisible, toggleEditMovieForm] = useToggle();
  const [isAddMovieMessageVisible, toggleAddMovieMessage] = useToggle();
  const [isEditMovieMessageVisible, toggleEditMovieMessage] = useToggle();
  const [isDeleteMovieMessageVisible, toggleDeleteMovieMessage] = useToggle();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sort, setSort] = useState('');

  useEffect(() => {
    if (sort) {
      setMovies(
        [...movies].sort((a, b) => {
          return (a[sort as keyof Movie] as string).localeCompare(b[sort as keyof Movie] as string);
        })
      );
    }
  }, [sort]);

  const handleMovieMenuFunctions = useMemo(() => {
    return [toggleEditMovieForm, toggleDeleteMovieMessage];
  }, [toggleEditMovieForm, toggleDeleteMovieMessage]);

  return (
    <div className="main">
      <Header handleAddMovieForm={toggleAddMovieForm} isVisible={!selectedMovie} />
      <MovieDetails movie={selectedMovie} selectMovie={setSelectedMovie} />
      <Filter setSort={setSort} />

      <ErrorBoundary>
        <Context.Provider value={handleMovieMenuFunctions}>
          <MoviesList movies={movies} selectMovie={setSelectedMovie} />
        </Context.Provider>
      </ErrorBoundary>

      <ModalWrapper isVisible={isAddMovieFormVisible}>
        <MovieForm action="Add" handleMovieForm={toggleAddMovieForm} handleChangeMovieMessage={toggleAddMovieMessage} />
      </ModalWrapper>
      <ModalWrapper isVisible={isEditMovieFormVisible}>
        <MovieForm
          action="Edit"
          handleMovieForm={toggleEditMovieForm}
          handleChangeMovieMessage={toggleEditMovieMessage}
        />
      </ModalWrapper>
      <ModalWrapper isVisible={isAddMovieMessageVisible}>
        <ModifyMovieMessage handleClose={toggleAddMovieMessage} text="added to" />
      </ModalWrapper>
      <ModalWrapper isVisible={isEditMovieMessageVisible}>
        <ModifyMovieMessage handleClose={toggleEditMovieMessage} text="edited in" />
      </ModalWrapper>
      <ModalWrapper isVisible={isDeleteMovieMessageVisible}>
        <DeleteMovieMessage handleClose={toggleDeleteMovieMessage} />
      </ModalWrapper>

      <Footer />
    </div>
  );
};

export default Main;
