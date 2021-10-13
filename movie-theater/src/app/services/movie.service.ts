import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../shared/model/entity/Movie';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {JsogObject} from 'jsog-typescript/dist/model/JsogObject';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly MOVIE_URL = 'http://localhost:8080/api/movie';

  constructor(private httpClient: HttpClient) {
  }
  // TuHC - lay phim dang chieu
  public getMovieShowing(): Observable<any>{
    return this.httpClient.get(this.MOVIE_URL + '/movie-showing');
  }
  // TuHC - lay phim sap chieu
  public getMovieComingSoon(): Observable<any>{
    return this.httpClient.get(this.MOVIE_URL + '/movie-coming');
  }
  // TuHC - lay phim top 5
  public getMovieTopFive(): Observable<any>{
    return this.httpClient.get(this.MOVIE_URL + '/movie-top5');
  }
  // TuHC - chi tiet phim
  public getDetailMovie(id: number): Observable<any>{
    return this.httpClient.get(this.MOVIE_URL + '/detail-movie/' + id);
  }
  // TuHC - search phim
  public searchMovie(keyword: string): Observable<any>{
    return this.httpClient.get(this.MOVIE_URL + '/search-movie?keyword=' + keyword);
  }
//  TuHC - lay comment cua 1 bo phim
  public getCommentByMovieId(id: number): Observable<any>{
    return this.httpClient.get(this.MOVIE_URL + '/get-comment/' + id);
  }
}
