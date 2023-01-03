import React, { ReactElement, useEffect, useMemo, useCallback } from 'react';
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
import { createMovie, updateMovie, getAllMoviesSorted, clearError } from '../store/moviesSlice';
import { AppDispatch } from '../store';
import Movie from '../types/Movie';
import './style.scss';
import useSearchParamsState from '../hooks/useSearchParamsState';

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
  const [searchParams, setSearchParams, removeSearchParams] = useSearchParamsState();
  const dispatch = useDispatch<AppDispatch>();
  const { error, movies, movieForEditing } = useSelector((state) => {
    return state.movies;
  });

  if (error) {
    alert(error);
    dispatch(clearError(''));
  }

  const handleAddMovieFormSubmit = useCallback(
    async (movie: Movie): Promise<void> => {
      dispatch(createMovie(movie))
        .unwrap()
        .then(() => {
          dispatch(getAllMoviesSorted(searchParams));
          toggleAddMovieForm();
          toggleAddMovieMessage();
        });
    },
    [searchParams]
  );

  const handleEditMovieFormSubmit = useCallback(
    async (movie: Movie): Promise<void> => {
      dispatch(updateMovie(movie))
        .unwrap()
        .then(() => {
          dispatch(getAllMoviesSorted(searchParams));
          toggleEditMovieForm();
          toggleEditMovieMessage();
        });
    },
    [searchParams]
  );

  useEffect(() => {
    dispatch(getAllMoviesSorted(searchParams));
  }, [dispatch, searchParams.filter, searchParams.search, searchParams.sortBy]);

  const handleMovieMenuFunctions = useMemo(() => {
    return [toggleEditMovieForm, toggleDeleteMovieMessage];
  }, [toggleEditMovieForm, toggleDeleteMovieMessage]);

  return (
    <div className="main">
      <Header
        onAddMovieForm={toggleAddMovieForm}
        isVisible={!searchParams.movie}
        params={searchParams}
        setParams={setSearchParams}
        removeSearchParams={removeSearchParams}
      />
      <MovieDetails movieId={searchParams.movie} removeSearchParams={removeSearchParams} />
      <Filter params={searchParams} setParams={setSearchParams} removeSearchParams={removeSearchParams} />

      <Context.Provider value={handleMovieMenuFunctions}>
        <MoviesList movies={movies} setParams={setSearchParams} />
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
