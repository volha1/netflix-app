export class Card {
  readonly id: number;
  readonly title: string;
  readonly year: string;
  readonly imgPath: string;
  readonly genres: Array<string>;

  constructor(id: number, title: string, year: string, imgPath: string, genres: Array<string>) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.imgPath = imgPath;
    this.genres = genres;
  }
}
