import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../shared/model/entity/Movie';
import {JsogService} from 'jsog-typescript';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies: Movie[];
  keyword: string;
  constructor(private movieService: MovieService, private jsog: JsogService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.keyword = this.activatedRoute.snapshot.queryParams.keyword;
    console.log(this.keyword);
    this.movieService.searchMovie(this.keyword).subscribe(data => {
      // @ts-ignore
      this.movies = this.jsog.deserializeArray(data, Movie);
    });
  }

}
