type Movie = {
  readonly id: string;
  readonly title: string;
  readonly voteAverage: string;
  readonly year: string;
  readonly imgPath: string;
  readonly genres: Array<string>;
  readonly overview: string;
  readonly runtime: number;
};

export default Movie;
