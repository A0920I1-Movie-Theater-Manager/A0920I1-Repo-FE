import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private readonly SEAT_URL = 'http://localhost:8080/api/seat';

  constructor(private httpClient: HttpClient) { }
//  TuHC - lay danh sach ghe cua 1 phong chieu
  public getAllSeatByMovieAndShowtime(movieId: number, showtimeId: number){
    return this.httpClient.get(this.SEAT_URL + '/get-seat/' + movieId + '/' + showtimeId);
  }
}
