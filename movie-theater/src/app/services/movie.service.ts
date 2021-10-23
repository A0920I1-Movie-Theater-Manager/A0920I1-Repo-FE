import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly MOVIE_URL = 'http://localhost:8080/api/movie';

  constructor(private httpClient: HttpClient) {
  }

  // TuHC - lay phim dang chieu
  public getMovieShowing(): Observable<any> {
    return this.httpClient.get(this.MOVIE_URL + '/movie-showing');
  }

  // TuHC - lay phim sap chieu
  public getMovieComingSoon(): Observable<any> {
    return this.httpClient.get(this.MOVIE_URL + '/movie-coming');
  }

  // TuHC - lay phim top 5
  public getMovieTopFive(): Observable<any> {
    return this.httpClient.get(this.MOVIE_URL + '/movie-top5');
  }

  // TuHC - chi tiet phim
  public findMovieById(id: number): Observable<any> {
    return this.httpClient.get(this.MOVIE_URL + '/detail-movie/' + id);
  }

  // TuHC - search phim
  public searchMovie(keyword: string): Observable<any> {
    return this.httpClient.get(this.MOVIE_URL + '/search-movie?keyword=' + keyword);
  }

//  TuHC - lay tat ca phim dang chieu va sap chieu
  public findAllMovieShowingAndComingSoon() {
    return this.httpClient.get(this.MOVIE_URL + '/all-movie');
  }
}
