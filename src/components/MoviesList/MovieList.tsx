import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import MovieCard from '../MovieCard';
import './style.scss';
import Movie from '../../entity/Movie';

type MoviesListProps = {
  movies: Movie[];
  selectMovie: Dispatch<SetStateAction<Movie>>;
};

const MoviesList = ({ movies, selectMovie }: MoviesListProps): ReactElement => {
  return (
    <div className="movies-list-wrapper content">
      <p className="counter">39 movies found</p>
      <div className="cards-list">
        {movies.map((movie: Movie) => {
          return <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
