import {GenreMovie} from './GenreMovie';

export class Genre {
  id: number;
  name: string;
  genreMovies: GenreMovie[];

  constructor(id: number, name: string, genreMovies: GenreMovie[]) {
    this.id = id;
    this.name = name;
    this.genreMovies = genreMovies;
  }
}
