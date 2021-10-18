import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../shared/model/entity/Movie';
import {Showtime} from '../../../shared/model/entity/Showtime';
import {MovieImage} from '../../../shared/model/entity/MovieImage';
import {ManagerMovieService} from '../../../services/manager-movie.service';
import {ActivatedRoute} from '@angular/router';
import {Genre} from '../../../shared/model/entity/Genre';
import {JsogService} from 'jsog-typescript';

@Component({
  selector: 'app-movie-details-admin',
  templateUrl: './movie-details-admin.component.html',
  styleUrls: ['./movie-details-admin.component.css']
})
export class MovieDetailsAdminComponent implements OnInit {
  movieDetail: Movie;
  genres: Genre[];
  showtimes: Showtime[];
  images: MovieImage[];

  constructor(
    private movieService: ManagerMovieService,
    private acctive: ActivatedRoute,
    private jSogService: JsogService
  ) { }

  ngOnInit(): void {
    this.getMovieById();



  }

  getMovieById(){
    this.movieService.getMovieById(this.acctive.snapshot.params.id).subscribe((data) => {
      // @ts-ignore
      this.movieDetail = this.jSogService.deserializeObject(data, Movie);
      console.log(this.movieDetail);
      this.genres = this.movieDetail.genres;
      this.showtimes = this.movieDetail.showtimes;
      this.images = this.movieDetail.movieImages;

      console.log(this.genres);
      console.log(this.showtimes);
      console.log(this.images);
    });
  }

}
