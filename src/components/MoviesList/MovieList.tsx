/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import MovieCard from '../MovieCard';
import Movie from '../../types/Movie';
import './style.scss';
import { loadingStatusSelector } from '../../store/moviesSlice';
import { useAppSelector } from '../../store';

type MovieSearchProps = { movie: string };
type MoviesListProps = {
  movies: Movie[];
  setParams: Dispatch<SetStateAction<MovieSearchProps>>;
};

const MoviesList = ({ movies, setParams }: MoviesListProps): ReactElement | null => {
  const loadingStatus = useAppSelector(loadingStatusSelector);

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
