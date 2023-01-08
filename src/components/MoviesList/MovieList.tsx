/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import Movie from '../../types/Movie';
import './style.scss';

type MovieSearchProps = { movie: string };
type MoviesListProps = {
  movies: Movie[];
  setParams: Dispatch<SetStateAction<MovieSearchProps>>;
};

const MoviesList = ({ movies, setParams }: MoviesListProps): ReactElement | null => {
  const loadingStatus = useSelector((state: any) => {
    return state.moviesReducer.loadingStatus;
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
