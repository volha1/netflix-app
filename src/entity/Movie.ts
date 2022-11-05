type Movie = {
  readonly id: number;
  readonly title: string;
  readonly year: string;
  readonly imgPath: string;
  readonly genres: Array<string>;
};

export default Movie;