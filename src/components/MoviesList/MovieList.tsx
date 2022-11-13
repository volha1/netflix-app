import React, { Dispatch, ReactElement, useState, SetStateAction, useCallback } from 'react';
import MovieCard from '../MovieCard';
import './style.scss';
import Movie from '../../entity/Movie';
import Modal from '../ModalWrapper';
import { DeleteMovieMessage } from '../Messages';

type MoviesListProps = {
  movies: Movie[];
  selectMovie: Dispatch<SetStateAction<null>>;
};

const MoviesList = ({ movies, selectMovie }: MoviesListProps): ReactElement => {
  const [isDeleteMovieMessageVisible, setDeleteMovieMessageVisible] = useState(false);

  const handleDeleteMovieMessage = useCallback(() => {
    setDeleteMovieMessageVisible(!isDeleteMovieMessageVisible);
  }, [isDeleteMovieMessageVisible]);

  return (
    <div className="movies-list-wrapper content">
      <p className="counter">39 movies found</p>
      <div className="cards-list">
        {movies.map((movie: Movie) => {
          return (
            <MovieCard key={movie.id} movie={movie} deleteMovie={handleDeleteMovieMessage} selectMovie={selectMovie} />
          );
        })}
      </div>
      <Modal visible={isDeleteMovieMessageVisible}>
        <DeleteMovieMessage handleClose={handleDeleteMovieMessage} />
      </Modal>
    </div>
  );
};

export default MoviesList;
