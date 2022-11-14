import React, { ReactElement, useState, memo, Dispatch, SetStateAction, useCallback } from 'react';
import './style.scss';
import Movie from '../../entity/Movie';
import menuIcon from '../../common/assets/svg/menu-icon.svg';
import Menu from '../Menu';
import { getYear } from '../../helpers/utils';
import useToggle from '../../hooks/useToggle';

type MovieCardProps = {
  movie: Movie;
  selectMovie: Dispatch<SetStateAction<Movie>>;
};

const MovieCard = ({ movie, selectMovie }: MovieCardProps): ReactElement => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const handleMenuClose = useToggle(isMenuVisible, setMenuVisible);

  const handleMenuIconClick = (event: Event): void => {
    event.stopPropagation();
    handleMenuClose();
  };

  const handleCardClick = (): void => {
    selectMovie(movie);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="movie-cover">
        <img className="movie-img" src={movie.imgPath} alt={movie.title} />
        <img className="menu-icon" src={menuIcon} alt="Menu" onClick={handleMenuIconClick} />
        <Menu isVisible={isMenuVisible} handleClose={handleMenuClose} />
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
