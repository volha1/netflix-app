import React, { ReactElement, memo, Dispatch, SetStateAction, useCallback } from 'react';
import './style.scss';
import Movie from '../../entity/Movie';
import menuIcon from '../../common/assets/svg/menu-icon.svg';
import Menu from '../Menu';
import { getYear } from '../../helpers/utils';
import useToggle from '../../hooks/useToggle';
import setDefaultImage from '../../helpers/setDefaultImage';

type MovieCardProps = {
  movie: Movie;
  onSelectMovie: Dispatch<SetStateAction<Movie>>;
};

const MovieCard = ({ movie, onSelectMovie }: MovieCardProps): ReactElement => {
  const [isMenuVisible, toggleMenuVisible] = useToggle();

  const handleMenuIconClick = useCallback((event: Event): void => {
    event.stopPropagation();
    toggleMenuVisible();
  }, []);

  const handleCardClick = useCallback((): void => {
    onSelectMovie(movie);
  }, []);

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="movie-cover">
        <img className="movie-img" src={movie.imgPath} alt={movie.title} onError={setDefaultImage} />
        <img className="menu-icon" src={menuIcon} alt="Menu" onClick={handleMenuIconClick} />
        <Menu isVisible={isMenuVisible} onClose={toggleMenuVisible} movie={movie} />
      </div>
      <div className="title-wrapper">
        <p className="card-title">{movie.title}</p>
        <p className="year">{getYear(movie.releaseDate)}</p>
      </div>
      <p className="genres">{movie.genres.join(', ')}</p>
    </div>
  );
};

export default memo(MovieCard);
