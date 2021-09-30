import {Movie} from './Movie';
import {Showtime} from './Showtime';

export class MovieShowtime {
  movie: Movie;
  showtime: Showtime;

  constructor(movie: Movie, showtime: Showtime) {
    this.movie = movie;
    this.showtime = showtime;
  }
}
