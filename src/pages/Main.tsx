import React, { ReactElement, useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import ModalWrapper from '../components/ModalWrapper/index';
import MovieForm from '../components/Forms/index';
import MoviesList from '../components/MoviesList';
import { ModifyMovieMessage, DeleteMovieMessage } from '../components/Messages/index';
import MovieDetails from '../components/MovieDetails';
import Context from '../context/Context';
import useToggle from '../hooks/useToggle';
import { getAllMovies, createMovie, updateMovie } from '../store/moviesSlice';
import './style.scss';

const Main = (): ReactElement => {
  const initialMovieState = {
    title: '',
    imgPath: '',
    voteAverage: '',
    genres: [],
    runtime: '',
    overview: '',
    releaseDate: '',
  };
  const [isAddMovieFormVisible, toggleAddMovieForm] = useToggle();
  const [isEditMovieFormVisible, toggleEditMovieForm] = useToggle();
  const [isAddMovieMessageVisible, toggleAddMovieMessage] = useToggle();
  const [isEditMovieMessageVisible, toggleEditMovieMessage] = useToggle();
  const [isDeleteMovieMessageVisible, toggleDeleteMovieMessage] = useToggle();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();
  const { errorStatus, movies, movieForEditing } = useSelector((state) => {
    return state.movies;
  });

  if (errorStatus) {
    throw new Error();
  }

  const handleAddMovieFormSubmit = useCallback(async (movie: Movie): Promise<void> => {
    dispatch(createMovie(movie)).then(() => {
      dispatch(getAllMovies());
      toggleAddMovieForm();
      toggleAddMovieMessage();
    });
  }, []);

  const handleEditMovieFormSubmit = useCallback(async (movie: Movie): Promise<void> => {
    dispatch(updateMovie(movie)).then(() => {
      dispatch(getAllMovies());
      toggleEditMovieForm();
      toggleEditMovieMessage();
    });
  }, []);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleMovieMenuFunctions = useMemo(() => {
    return [toggleEditMovieForm, toggleDeleteMovieMessage];
  }, [toggleEditMovieForm, toggleDeleteMovieMessage]);

  return (
    <div className="main">
      <Header onAddMovieForm={toggleAddMovieForm} isVisible={!selectedMovie} />
      <MovieDetails movie={selectedMovie} onSelectMovie={setSelectedMovie} />
      <Filter />

      <Context.Provider value={handleMovieMenuFunctions}>
        <MoviesList movies={movies} onSelectMovie={setSelectedMovie} />
      </Context.Provider>

      <ModalWrapper isVisible={isAddMovieFormVisible}>
        <MovieForm
          actionText="Add"
          movie={initialMovieState}
          onCloseMovieForm={toggleAddMovieForm}
          onSubmit={handleAddMovieFormSubmit}
        />
      </ModalWrapper>
      <ModalWrapper isVisible={isEditMovieFormVisible}>
        <MovieForm
          actionText="Edit"
          movie={movieForEditing}
          onCloseMovieForm={toggleEditMovieForm}
          onSubmit={handleEditMovieFormSubmit}
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
