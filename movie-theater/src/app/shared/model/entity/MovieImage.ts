import {Movie} from './Movie';

export class MovieImage {
  id: number;
  imageUrl: string;
  movie: Movie;

  constructor(id: number, imageUrl: string, movie: Movie) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.movie = movie;
  }
}
