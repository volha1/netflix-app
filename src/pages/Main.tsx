import React, { ReactElement, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import getMovies from '../api/moviesService';

const Main = (): ReactElement => {
  const [isAddMovieFormVisible, toggleAddMovieForm] = useToggle();
  const [isEditMovieFormVisible, toggleEditMovieForm] = useToggle();
  const [isAddMovieMessageVisible, toggleAddMovieMessage] = useToggle();
  const [isEditMovieMessageVisible, toggleEditMovieMessage] = useToggle();
  const [isDeleteMovieMessageVisible, toggleDeleteMovieMessage] = useToggle();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();
  const sortedMovies = useSelector((state) => state.movies);

  // const sortedMovies = useMemo(() => {
  //   if (sort) {
  //     return moviesData.sort((a, b) => {
  //       return (a[sort as keyof Movie] as string).localeCompare(b[sort as keyof Movie] as string);
  //     });
  //   }
  //   return moviesData;
  // }, [sort]);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const handleMovieMenuFunctions = useMemo(() => {
    return [toggleEditMovieForm, toggleDeleteMovieMessage];
  }, [toggleEditMovieForm, toggleDeleteMovieMessage]);

  return (
    <div className="main">
      <Header onAddMovieForm={toggleAddMovieForm} isVisible={!selectedMovie} />
      <MovieDetails movie={selectedMovie} onSelectMovie={setSelectedMovie} />
      <Filter onSort={setSort} />

      <ErrorBoundary>
        <Context.Provider value={handleMovieMenuFunctions}>
          <MoviesList movies={sortedMovies} onSelectMovie={setSelectedMovie} />
        </Context.Provider>
      </ErrorBoundary>

      <ModalWrapper isVisible={isAddMovieFormVisible}>
        <MovieForm actionText="Add" onCloseMovieForm={toggleAddMovieForm} onShowMovieMessage={toggleAddMovieMessage} />
      </ModalWrapper>
      <ModalWrapper isVisible={isEditMovieFormVisible}>
        <MovieForm
          actionText="Edit"
          onCloseMovieForm={toggleEditMovieForm}
          onShowMovieMessage={toggleEditMovieMessage}
        />
      </ModalWrapper>
      <ModalWrapper isVisible={isAddMovieMessageVisible}>
        <ModifyMovieMessage onClose={toggleAddMovieMessage} text="added to" />
      </ModalWrapper>
      <ModalWrapper isVisible={isEditMovieMessageVisible}>
        <ModifyMovieMessage onClose={toggleEditMovieMessage} text="edited in" />
      </ModalWrapper>
      <ModalWrapper isVisible={isDeleteMovieMessageVisible}>
        <DeleteMovieMessage onClose={toggleDeleteMovieMessage} />
      </ModalWrapper>

      <Footer />
    </div>
  );
};

export default Main;
