import {Showtime} from './Showtime';
import {Seat} from './Seat';

export class Screen {
  id: number;
  name: string;
  totalSeat: number;
  showtime: Showtime;
  seats: Seat[];
}
