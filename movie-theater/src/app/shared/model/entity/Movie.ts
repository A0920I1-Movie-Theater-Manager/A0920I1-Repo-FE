import {Comment} from './Comment';
import {MovieImage} from './MovieImage';
import {Showtime} from './Showtime';
<<<<<<< HEAD
import {Account} from './Account';
import {Genre} from './Genre';

=======
import {Genre} from './Genre';
>>>>>>> VietNT_Account_user

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
<<<<<<< HEAD
  genres: Genre[];
=======
  genres: Genre;
>>>>>>> VietNT_Account_user
  comments: Comment[];
  movieImages: MovieImage[];
  showtimes: Showtime[];
  accountId: Account[];

  constructor(id: number, title: string, showingFrom: string, showingTo: string, cast: string, director: string, releaseDate: string,
              rated: string, runningTime: number, production: string, trailerUrl: string, content: string, is3D: boolean,
<<<<<<< HEAD
              genres: Genre[], comments: Comment[], movieImages: MovieImage[], showtimes: Showtime[]) {
=======
              genreMovies: Genre[], comments: Comment[], movieImages: MovieImage[], showtimes: Showtime[]) {
>>>>>>> VietNT_Account_user
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
<<<<<<< HEAD
    this.genres = genres;
=======
    // @ts-ignore
    this.genres = Genre;
>>>>>>> VietNT_Account_user
    this.comments = comments;
    this.movieImages = movieImages;
    this.showtimes = showtimes;
  }
}
