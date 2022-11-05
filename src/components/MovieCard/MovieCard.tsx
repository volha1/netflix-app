import React, { ReactElement } from 'react';
import './style.scss';
import Movie from '../../entity/Movie';
import menuIcon from '../../common/assets/svg/menu-icon.svg';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps): ReactElement => {
  return (
    <div className="card">
      <div className="movie-cover">
        <img className="movie-img" src={movie.imgPath} alt={movie.title} />
        <img className="menu-icon" src={menuIcon} alt="Menu" />
      </div>
      <div className="title-wrapper">
        <p className="title">{movie.title}</p>
        <p className="year">{movie.year}</p>
      </div>
      <p className="genres">{movie.genres.join(', ')}</p>
    </div>
  );
};

export default MovieCard;
