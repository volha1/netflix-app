import React, { ReactElement } from 'react';
import searchIcon from '../../common/assets/svg/search-icon.svg';
import Movie from '../../entity/Movie';
import { getMovieDuration, getYear } from '../../helpers/utils';
import './style.scss';

type MovieDetailsProps = {
  movie: Movie | null;
  selectMovie: (value: null) => void;
};

const MovieDetails = ({ movie, selectMovie }: MovieDetailsProps): ReactElement | null => {
  const handleSeacrhIconClick = (): void => {
    selectMovie(null);
  };

  return (
    movie && (
      <div className="movie-details">
        <div className="movie-details-wrapper content">
          <div className="nav-block">
            <p className="logo">netflixroulette</p>
            <img className="search-icon" src={searchIcon} alt="Search" onClick={handleSeacrhIconClick} />
          </div>
          <div className="details-wrapper">
            <img className="movie-img" src={movie.imgPath} alt={movie.title} />
            <div className="movie-description">
              <div className="title-wrapper">
                <h1 className="title">
                  {movie.title}
                  <span className="rating">{movie.voteAverage}</span>
                </h1>
              </div>
              <p className="genres">{movie.genres.join(', ')}</p>
              <p className="movie-characteristics">
                <span>{getYear(movie.year)}</span>
                {getMovieDuration(movie.runtime)}
              </p>
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDetails;
