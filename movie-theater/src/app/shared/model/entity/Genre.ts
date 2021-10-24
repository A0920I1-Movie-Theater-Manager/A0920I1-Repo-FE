import {Movie} from './Movie';
import {JsonProperty} from 'jsog-typescript';

export class Genre {
  id: number;
  name: string;
  movies: Movie[];

  constructor(id: number, name: string, movies: Movie[]) {
    this.id = id;
    this.name = name;
    this.movies = movies;
  }
}
