import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private readonly SEAT_URL = 'http://localhost:8080/api/seat';

  private paramSource = new Subject();
  sharedParam = this.paramSource.asObservable();

  constructor(private httpClient: HttpClient) {
  }

//  TuHC - lay danh sach ghe cua 1 phong chieu
  public getAllSeatByMovieAndShowtime(movieId: number, showtimeId: number) {
    return this.httpClient.get(this.SEAT_URL + '/get-seat/' + movieId + '/' + showtimeId);
  }

//  TuHC - lay ghe theo ten ghe va gio chieu
  public getSeatBySeatNameAndShowtimeAndMovie(seatName: string, showtimeId: number, movieId: number) {
    return this.httpClient.get(this.SEAT_URL + '/get-single-seat/' + seatName + '/' + showtimeId + '/' + movieId);
  }

  changeParam(param: any[]) {
    this.paramSource.next(param);
  }
}
