import {Showtime} from './Showtime';
import {Seat} from './Seat';

export class Screen {
  id: number;
  name: string;
  totalSeat: number;
  showtime: Showtime;
  seats: Seat[];

  constructor(id: number, name: string, totalSeat: number, showtime: Showtime, seats: Seat[]) {
    this.id = id;
    this.name = name;
    this.totalSeat = totalSeat;
    this.showtime = showtime;
    this.seats = seats;
  }
}
