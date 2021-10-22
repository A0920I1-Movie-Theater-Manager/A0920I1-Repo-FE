import {Screen} from './Screen';
import {Booking} from './Booking';
import {JsonProperty} from 'jsog-typescript';
import {MovieShowtime} from './MovieShowtime';

export class Seat {
  id: number;
  vip: boolean;
  name: string;
  price: number;
  screen: Screen;
  bookings: Booking[];

  constructor(id: number, vip: boolean, name: string, price: number, screen: Screen, bookings: Booking[]) {
    this.id = id;
    this.vip = vip;
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.bookings = bookings;
  }
}
