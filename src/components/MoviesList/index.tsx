import React, { ReactElement } from 'react';
import MovieCard from '../MovieCard';
import './style.scss';
import { Card } from '../../entity/Card';

const MoviesList = (): ReactElement => {
  // const errorIndicator = true;

  // if (errorIndicator) {
  //   throw new Error('Server error');
  // }

  const movies: Array<Card> = [
    new Card(1, 'Pulp Fiction', '2004', 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg', [
      'Action',
      'Adventure',
    ]),
    new Card(2, 'Bohemian Rhapsody', '2003', 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg', [
      'Action',
      'Adventure',
    ]),
    new Card(3, 'Kill Bill: Vol 2', '1994', 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg', [
      'Action',
      'Adventure',
    ]),
    new Card(
      4,
      'Avengers: War of Infinity',
      '2004',
      'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
      ['Action', 'Adventure']
    ),
    new Card(5, 'Inception', '2004', 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg', [
      'Action',
      'Adventure',
    ]),
    new Card(6, 'Reservoir dogs', '1995', 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg', [
      'Action',
      'Adventure',
    ]),
  ];
  return (
    <div className="movies-list-wrapper content">
      <p className="counter">39 movies found</p>
      <div className="cards-list">
        {movies.map((movie: Card) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
