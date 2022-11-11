import React, { ReactElement } from 'react';
import searchIcon from '../../common/assets/svg/search-icon.svg';
import './style.scss';

const MovieDetails = (): ReactElement => {
  const movie = {
    id: '1',
    title: 'Pulp Fiction',
    voteAverage: '9.7',
    year: '2004',
    imgPath: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    genres: ['Action', 'Adventure'],
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    runtime: 156,
  };

  return (
    <div className="movie-details content">
      <div className="nav-block">
        <p className="logo">netflixroulette</p>
        <img className="search-icon" src={searchIcon} alt="Search" />
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
            <span>{movie.year}</span>2h 34m
          </p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
