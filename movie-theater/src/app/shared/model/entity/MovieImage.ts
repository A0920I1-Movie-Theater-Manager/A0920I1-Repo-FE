import {Movie} from './Movie';
import {JsonProperty} from 'jsog-typescript';

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
