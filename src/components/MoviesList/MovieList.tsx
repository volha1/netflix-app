import React, { ReactElement, useState } from 'react';
import MovieCard from '../MovieCard';
import './style.scss';
import Movie from '../../entity/Movie';
import Modal from '../ModalWrapper';
import { DeleteMovieWindow } from '../ModalWindows';

type MoviesListProps = {
  handleEditMovieForm: () => void;
  movies: Movie[];
};

const MoviesList = ({ handleEditMovieForm, movies }: MoviesListProps): ReactElement => {
  const [isDeleteMovieWindowVisible, setDeleteMovieWindowVisible] = useState(false);

  const handleDeleteMovieWindow = (): void => {
    setDeleteMovieWindowVisible(!isDeleteMovieWindowVisible);
  };

  return (
    <div className="movies-list-wrapper content">
      <p className="counter">39 movies found</p>
      <div className="cards-list">
        {movies.map((movie: Movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              deleteMovie={handleDeleteMovieWindow}
              editMovie={handleEditMovieForm}
            />
          );
        })}
      </div>
      <Modal visible={isDeleteMovieWindowVisible}>
        <DeleteMovieWindow handleClose={handleDeleteMovieWindow} />
      </Modal>
    </div>
  );
};

export default MoviesList;
