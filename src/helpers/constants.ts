import Movie from '../entity/Movie';

const url = 'http://localhost:4000';

const movies: Array<Movie> = [
  {
    id: '1',
    title: 'Fifty Shades Freed',
    voteAverage: '6.1',
    year: '2018-02-07',
    imgPath: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    genres: ['Action', 'Adventure'],
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    runtime: 156,
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    voteAverage: '7.4',
    year: '2016-02-11',
    imgPath: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    genres: ['Action', 'Adventure'],
    overview:
      "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    runtime: 134,
  },
  {
    id: '3',
    title: 'Kill Bill: Vol 2',
    voteAverage: '8.2',
    year: '2017-12-13',
    imgPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    genres: ['Action', 'Adventure'],
    overview:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    runtime: 120,
  },
  {
    id: '4',
    title: 'Avengers: War of Infinity',
    voteAverage: '8.9',
    year: '2018-02-13',
    imgPath: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    genres: ['Action', 'Adventure'],
    overview:
      "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    runtime: 106,
  },
  {
    id: '5',
    title: 'Inception',
    voteAverage: '7.5',
    year: '2015-03-28',
    imgPath: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    genres: ['Action', 'Adventure'],
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    runtime: 108,
  },
  {
    id: '6',
    title: 'Reservoir dogs',
    voteAverage: '6.8',
    year: '2017-10-25',
    imgPath: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
    genres: ['Action', 'Adventure'],
    overview:
      'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
    runtime: 118,
  },
];

export { movies, url };
