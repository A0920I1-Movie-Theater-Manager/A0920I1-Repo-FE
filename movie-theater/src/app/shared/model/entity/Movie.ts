import {GenreMovie} from './GenreMovie';
import {Comment} from './Comment';
import {MovieImage} from './MovieImage';
import {Showtime} from './Showtime';
import {Genre} from './Genre';

export class Movie {
  id: number;
  title: string;
  showingFrom: string;
  showingTo: string;
  cast: string;
  director: string;
  releaseDate: string;
  rated: string;
  runningTime: number;
  production: string;
  trailerUrl: string;
  content: string;
  is3D: boolean;
  genres: Genre[];
  comments: Comment[];
  movieImages: MovieImage[];
  showtimes: Showtime[];

  constructor(id: number, title: string, showingFrom: string, showingTo: string, cast: string, director: string, releaseDate: string,
              rated: string, runningTime: number, production: string, trailerUrl: string, content: string, is3D: boolean,
              genres: Genre[], comments: Comment[], movieImages: MovieImage[], showtimes: Showtime[]) {
    this.id = id;
    this.title = title;
    this.showingFrom = showingFrom;
    this.showingTo = showingTo;
    this.cast = cast;
    this.director = director;
    this.releaseDate = releaseDate;
    this.rated = rated;
    this.runningTime = runningTime;
    this.production = production;
    this.trailerUrl = trailerUrl;
    this.content = content;
    this.is3D = is3D;
    this.genres = genres;
    this.comments = comments;
    this.movieImages = movieImages;
    this.showtimes = showtimes;
  }
}
