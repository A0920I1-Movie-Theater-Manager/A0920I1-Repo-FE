import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../shared/model/entity/Movie';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {JsogService, JsonProperty} from 'jsog-typescript';
import {Class} from 'jsog-typescript/dist/support/Class';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService,
              private jsog: JsogService) {
  }

  movieShowings: Movie[] = [];
  movieComings: Movie[];
  movieTopFives: Movie[];
  movieSearches: Movie[];
  keyword = '';

  customOptions: OwlOptions = {
    merge: true,
    center: true,
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    // margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

  ngOnInit(): void {
    this.movieService.getMovieShowing().subscribe(data => {
      this.movieShowings = this.jsog.deserializeArray(data, Movie);
      // console.log(this.movieShowings);
    });
    this.movieService.getMovieComingSoon().subscribe(data => {
      this.movieComings = this.jsog.deserializeArray(data, Movie);
    });
    this.movieService.getMovieTopFive().subscribe(data => {
      this.movieTopFives = this.jsog.deserializeArray(data, Movie);
    });
  }
}
