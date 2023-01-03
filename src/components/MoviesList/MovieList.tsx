import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import Movie from '../../types/Movie';
import SearchParams from '../../types/SearchParams';
import './style.scss';

type MoviesListProps = {
  movies: Movie[];
  setParams: Dispatch<SetStateAction<SearchParams>>;
};

const MoviesList = ({ movies, setParams }: MoviesListProps): ReactElement | null => {
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
            return <MovieCard key={movie.id} movie={movie} onClick={setParams} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
