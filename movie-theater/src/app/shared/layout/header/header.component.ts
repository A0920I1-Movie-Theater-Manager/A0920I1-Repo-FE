import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/entity/Movie';
import {MovieService} from '../../../services/movie.service';
import {JsogService} from 'jsog-typescript';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword = '';
  movieSearches: Movie[];
  movieResult: Movie[];
  constructor(private movieService: MovieService, private jsog: JsogService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // TuHC - goi y tim kiem
  suggestMovie(){
    this.movieService.searchMovie(this.keyword).subscribe(data => {
      // @ts-ignore
      this.movieSearches = this.jsog.deserializeArray(data, Movie);
    });
  }
  // TuHC - tim kiem phim
  searchMovie(){
    this.router.navigateByUrl('/movie-search?keyword=' + this.keyword);
  }
}
