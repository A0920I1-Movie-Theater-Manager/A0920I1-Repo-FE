import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookingDTO} from '../shared/model/dto/BookingDTO';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly BOOKING_URL = 'http://localhost:8080/api/booking';

  constructor(private httpClient: HttpClient) {
  }

  public addBooking(bookingDTO: BookingDTO) {
    return this.httpClient.post(this.BOOKING_URL + '/add-booking', bookingDTO);
  }
}
