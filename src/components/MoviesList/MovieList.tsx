import React, { ReactElement } from 'react';
import MovieCard from '../MovieCard';
import './style.scss';
import Movie from '../../entity/Movie';

const MoviesList = (): ReactElement => {
  const movies: Array<Movie> = [
    {
      id: 1,
      title: 'Pulp Fiction',
      year: '2004',
      imgPath: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      genres: ['Action', 'Adventure'],
    },
    {
      id: 2,
      title: 'Bohemian Rhapsody',
      year: '2003',
      imgPath: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      genres: ['Action', 'Adventure'],
    },
    {
      id: 3,
      title: 'Kill Bill: Vol 2',
      year: '1994',
      imgPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      genres: ['Action', 'Adventure'],
    },
    {
      id: 4,
      title: 'Avengers: War of Infinity',
      year: '2004',
      imgPath: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
      genres: ['Action', 'Adventure'],
    },
    {
      id: 5,
      title: 'Inception',
      year: '2004',
      imgPath: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
      genres: ['Action', 'Adventure'],
    },
    {
      id: 6,
      title: 'Reservoir dogs',
      year: '1995',
      imgPath: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
      genres: ['Action', 'Adventure'],
    },
  ];
  return (
    <div className="movies-list-wrapper content">
      <p className="counter">39 movies found</p>
      <div className="cards-list">
        {movies.map((movie: Movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
