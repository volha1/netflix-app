import React, { ReactElement, useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
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
import Movie from '../entity/Movie';
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
  const [params, setParams] = useState({ filter: undefined, sortOrder: '', sortBy: '', search: '' });
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
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
          dispatch(getAllMoviesSorted(params));
          toggleAddMovieForm();
          toggleAddMovieMessage();
        });
    },
    [params.filter, params.sortOrder, params.search]
  );

  const handleEditMovieFormSubmit = useCallback(
    async (movie: Movie): Promise<void> => {
      dispatch(updateMovie(movie))
        .unwrap()
        .then(() => {
          dispatch(getAllMoviesSorted(params));
          toggleEditMovieForm();
          toggleEditMovieMessage();
        });
    },
    [params.filter, params.sortOrder, params.search]
  );

  useEffect(() => {
    dispatch(getAllMoviesSorted(params));
    const searchParamsObject = {};
    if (params.search) searchParamsObject.search = params.search;
    if (params.filter) searchParamsObject.filter = params.filter;
    if (params.sortBy) searchParamsObject.sortBy = params.sortBy;
    if (params.sortOrder) searchParamsObject.sortOrder = params.sortOrder;
    setSearchParams(searchParamsObject);
  }, [dispatch, params.filter, params.sortOrder, params.search]);

  const handleMovieMenuFunctions = useMemo(() => {
    return [toggleEditMovieForm, toggleDeleteMovieMessage];
  }, [toggleEditMovieForm, toggleDeleteMovieMessage]);

  return (
    <div className="main">
      <Header onAddMovieForm={toggleAddMovieForm} isVisible={!selectedMovie} params={params} setParams={setParams} />
      <MovieDetails movie={selectedMovie} onSelectMovie={setSelectedMovie} />
      <Filter params={params} setParams={setParams} />

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
