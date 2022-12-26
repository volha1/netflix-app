import React, { ReactElement, useCallback, useMemo, Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import searchIcon from '../../common/assets/svg/search-icon.svg';
import { getMovieDuration, getYear } from '../../helpers/utils';
import setDefaultImage from '../../helpers/setDefaultImage';
import './style.scss';

type MovieDetailsProps = {
  movieId: string | null;
  removeSearchParams: Dispatch<SetStateAction<string>>;
};

const MovieDetails = ({ movieId, removeSearchParams }: MovieDetailsProps): ReactElement | null => {
  const { movies } = useSelector((state) => {
    return state.movies;
  });

  const movie = useMemo(() => {
    return movies.find((movie) => movie.id == movieId);
  }, [movieId, movies]);

  const handleSeacrhIconClick = useCallback((): void => {
    removeSearchParams('movie');
  }, [movieId, movies]);

  return (
    movie && (
      <div className="movie-details">
        <div className="movie-details-wrapper content">
          <div className="nav-block">
            <p className="logo">netflixroulette</p>
            <img className="search-icon" src={searchIcon} alt="Search" onClick={handleSeacrhIconClick} />
          </div>
          <div className="details-wrapper">
            <img className="movie-img" src={movie.imgPath} alt={movie.title} onError={setDefaultImage} />
            <div className="movie-description">
              <div className="title-wrapper">
                <h1 className="title">
                  {movie.title}
                  <span className="rating">{movie.voteAverage}</span>
                </h1>
              </div>
              <p className="genres">{movie.genres.join(', ')}</p>
              <p className="movie-characteristics">
                <span>{getYear(movie.releaseDate)}</span>
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
