import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../shared/model/entity/Movie';
import {Observable} from 'rxjs';
import {MovieImage} from '../shared/model/entity/MovieImage';

@Injectable({
  providedIn: 'root'
})
export class ManagerMovieService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  // HueHV, phương thức hiển thị tất cả danh sách phim
  public getListAllMovie(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.API_URL + '/list-movie');
  }

  // HueHV, phương thức tìm phim theo mã id
  public getMovieById(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(this.API_URL + '/list/' + id);
  }

  // HueHV, phương thức tạo mới 1 bộ phim
  public createMovie(movie: Movie): Observable<void>{
    return this.httpClient.post<void>(this.API_URL + '/create-movie', movie);
  }

  public createMovies(movie: Movie, url: any): Observable<void>{
    return this.httpClient.post<void>(this.API_URL + '/create-movie/'+ url, movie);
  }

  // HueHV, phương thức chỉnh sửa 1 bộ phim
  public updateMovie(movie: Movie): Observable<void>{
    return this.httpClient.patch<void>(this.API_URL + '/update-movie/' + movie.id, movie);
  }

  // HueHV, phương thức lấy tất cả ảnh của bộ phim theo id của phim
  public getImageByIdMovie(id: number): Observable<MovieImage[]>{
    return this.httpClient.get<MovieImage[]>(this.API_URL + '/get-image' + id);
  }

  // HueHV, phương thức thêm ảnh cho 1 bộ phim
  public addImageMovie(movieImage: MovieImage): Observable<void>{
    return this.httpClient.post<void>(this.API_URL + '/add-image-movie', movieImage);
  }

  // HueHV, phương thức lấy danh sách account của nhân viên
  public getListAccountByCodeEmployee(): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/list-employee');
  }

  // HueHV, phương thức tìm kiếm movie theo tên
  public findMovieByName(title: string): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.API_URL + '/list-movie?title=' + title);
  }

  // HueHV, lấy id movie theo title
  public getIdMovieByTitle(title: string):Observable<Movie> {
    return this.httpClient.get<Movie>(this.API_URL + '/get-id?title= ' + title);
  }

  // HueHV
  public getAllListGenre(): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/list-genre');
  }

  // HueHV
  public getAllListPrice(): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/list-price');
  }

}
