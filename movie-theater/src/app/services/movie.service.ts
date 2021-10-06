import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../shared/model/entity/Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly MOVIE_URL = 'http://localhost:8080/api/movie';

  constructor(private httpClient: HttpClient) {
  }

  public getAllMovie() {
    return this.httpClient.get(this.MOVIE_URL + '/all-movie');
  }

  public getDetailMovie(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(this.MOVIE_URL + '/detail/' + id);
  }
}
