import {MovieShowtime} from './MovieShowtime';
import {Screen} from './Screen';
import {Price} from './Price';
import {JsonProperty} from 'jsog-typescript';

export class Showtime {
  id: number;
  showTime: string;
  showDay: string;
  movieShowtime: MovieShowtime[];
  screens: Screen[];
  price: Price;

  constructor(id: number, showTime: string, showDay: string, movieShowtime: MovieShowtime[], screens: Screen[], price: Price) {
    this.id = id;
    this.showTime = showTime;
    this.showDay = showDay;
    this.movieShowtime = movieShowtime;
    this.screens = screens;
    this.price = price;
  }
}
