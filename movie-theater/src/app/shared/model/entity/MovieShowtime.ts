import {Movie} from './Movie';
import {Showtime} from './Showtime';
import {JsonProperty} from 'jsog-typescript';

export class MovieShowtime {
  movie: Movie;
  showtime: Showtime;

  constructor(movie: Movie, showtime: Showtime) {
    this.movie = movie;
    this.showtime = showtime;
  }
}
