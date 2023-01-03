type Movie = {
  readonly id: string;
  readonly title: string;
  readonly voteAverage: string;
  readonly releaseDate: string;
  readonly imgPath: string;
  readonly genres: Array<string>;
  readonly overview: string;
  readonly runtime: number;
};

export default Movie;
