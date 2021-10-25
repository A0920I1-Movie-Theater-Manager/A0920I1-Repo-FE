import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {
  private readonly API_URL_SHOWTIME_LIST = 'http://localhost:8080/api/showtime-list';
  constructor(private httpClient: HttpClient) {
  }
  getListSHowTime(page: number): Observable<any>{
    return this.httpClient.get<any>(this.API_URL_SHOWTIME_LIST + '?page=' + page);
  }
}
