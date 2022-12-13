import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import Movie from '../../entity/Movie';
import './style.scss';

type MoviesListProps = {
  movies: Movie[];
  onSelectMovie: Dispatch<SetStateAction<Movie>>;
};

const MoviesList = ({ movies, onSelectMovie }: MoviesListProps): ReactElement => {
  const loadingStatus = useSelector((state) => {
    return state.movies.loadingStatus;
  });

  if (!movies) {
    return null;
  }

  return (
    <div className="movies-list-wrapper content">
      <p className="counter">{loadingStatus ? 'Loading...' : `${movies.length} movies found`}</p>
      {movies.length > 0 && (
        <div className="cards-list">
          {movies.map((movie: Movie) => {
            return <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
