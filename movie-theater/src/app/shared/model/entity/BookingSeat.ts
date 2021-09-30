import {Booking} from './Booking';
import {Seat} from './Seat';

export class BookingSeat {
  booking: Booking;
  seat: Seat;

  constructor(booking: Booking, seat: Seat) {
    this.booking = booking;
    this.seat = seat;
  }
}
