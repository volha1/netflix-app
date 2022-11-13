import React, { ReactElement, useState, memo, Dispatch, SetStateAction, useCallback } from 'react';
import './style.scss';
import Movie from '../../entity/Movie';
import menuIcon from '../../common/assets/svg/menu-icon.svg';
import Menu from '../Menu';
import { getYear } from '../../helpers/utils';

type MovieCardProps = {
  movie: Movie;
  deleteMovie: () => void;
  selectMovie: Dispatch<SetStateAction<Movie>>;
};

const MovieCard = ({ movie, deleteMovie, selectMovie }: MovieCardProps): ReactElement => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = useCallback(() => {
    setMenuVisible(!isMenuVisible);
  }, [isMenuVisible]);

  const handleCardClick = (): void => {
    selectMovie(movie);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="movie-cover">
        <img className="movie-img" src={movie.imgPath} alt={movie.title} />
        <img className="menu-icon" src={menuIcon} alt="Menu" onClick={handleMenuClick} />
        <Menu visible={isMenuVisible} handleClose={handleMenuClick} deleteMovie={deleteMovie} />
      </div>
      <div className="title-wrapper">
        <p className="card-title">{movie.title}</p>
        <p className="year">{getYear(movie.year)}</p>
      </div>
      <p className="genres">{movie.genres.join(', ')}</p>
    </div>
  );
};

export default memo(MovieCard);
