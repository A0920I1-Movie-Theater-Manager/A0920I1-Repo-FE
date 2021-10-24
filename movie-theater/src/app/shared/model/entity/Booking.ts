import {BookingSeat} from './BookingSeat';
import {Payment} from './Payment';
import {Promotion} from './Promotion';
import {Account} from './Account';
import {JsonProperty} from 'jsog-typescript';
import {MovieShowtime} from './MovieShowtime';

export class Booking {
  id: number;
  totalPrice: number;
  point: number;
  bookingCode: string;
  received: boolean;
  bookingSeats: BookingSeat[];
  payment: Payment;
  promotion: Promotion;
  account: Account;
  constructor(id: number, totalPrice: number, point: number, bookingCode: string, received: boolean, bookingSeats: BookingSeat[],
              payment: Payment, promotion: Promotion, account: Account) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.point = point;
    this.bookingCode = bookingCode;
    this.received = received;
    this.bookingSeats = bookingSeats;
    this.payment = payment;
    this.promotion = promotion;
    this.account = account;
  }
}
