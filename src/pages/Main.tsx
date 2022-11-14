import React, { ReactElement, useState, useEffect, useCallback, useMemo } from 'react';
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
  const [isAddMovieFormVisible, setAddMovieFormVisible] = useState(false);
  const [isEditMovieFormVisible, setEditMovieFormVisible] = useState(false);
  const [isAddMovieMessageVisible, setAddMovieMessageVisible] = useState(false);
  const [isEditMovieMessageVisible, setEditMovieMessageVisible] = useState(false);
  const [isDeleteMovieMessageVisible, setDeleteMovieMessageVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sort, setSort] = useState('');

  const handleDeleteMovieMessage = useToggle(isDeleteMovieMessageVisible, setDeleteMovieMessageVisible);
  const handleAddMovieForm = useToggle(isAddMovieFormVisible, setAddMovieFormVisible);
  const handleEditMovieForm = useToggle(isEditMovieFormVisible, setEditMovieFormVisible);
  const handleAddMovieMessage = useToggle(isAddMovieMessageVisible, setAddMovieMessageVisible);
  const handleEditMovieMessage = useToggle(isEditMovieMessageVisible, setEditMovieMessageVisible);

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
    return [handleEditMovieForm, handleDeleteMovieMessage];
  }, [handleEditMovieForm, handleDeleteMovieMessage]);

  return (
    <div className="main">
      <Header handleAddMovieForm={handleAddMovieForm} isVisible={!selectedMovie} />
      <MovieDetails movie={selectedMovie} selectMovie={setSelectedMovie} />
      <Filter setSort={setSort} />

      <ErrorBoundary>
        <Context.Provider value={handleMovieMenuFunctions}>
          <MoviesList movies={movies} selectMovie={setSelectedMovie} />
        </Context.Provider>
      </ErrorBoundary>

      <ModalWrapper isVisible={isAddMovieFormVisible}>
        <MovieForm action="Add" handleMovieForm={handleAddMovieForm} handleChangeMovieMessage={handleAddMovieMessage} />
      </ModalWrapper>
      <ModalWrapper isVisible={isEditMovieFormVisible}>
        <MovieForm
          action="Edit"
          handleMovieForm={handleEditMovieForm}
          handleChangeMovieMessage={handleEditMovieMessage}
        />
      </ModalWrapper>
      <ModalWrapper isVisible={isAddMovieMessageVisible}>
        <ModifyMovieMessage handleClose={handleAddMovieMessage} text="added to" />
      </ModalWrapper>
      <ModalWrapper isVisible={isEditMovieMessageVisible}>
        <ModifyMovieMessage handleClose={handleEditMovieMessage} text="edited in" />
      </ModalWrapper>
      <ModalWrapper isVisible={isDeleteMovieMessageVisible}>
        <DeleteMovieMessage handleClose={handleDeleteMovieMessage} />
      </ModalWrapper>

      <Footer />
    </div>
  );
};

export default Main;
