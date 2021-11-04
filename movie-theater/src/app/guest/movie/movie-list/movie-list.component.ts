import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../shared/model/entity/Movie';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {JsogService} from 'jsog-typescript';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService,
              private jsogService: JsogService) {
  }

  movieShowings: Movie[];
  movieComings: Movie[];
  movieTopFives: Movie[];

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

  customBanner: OwlOptions = {
    merge: true,
    center: true,
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', '' ],
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
      // @ts-ignore
      this.movieShowings = this.jsogService.deserializeArray(data, Movie);
    });
    this.movieService.getMovieComingSoon().subscribe(data => {
      // @ts-ignore
      this.movieComings = this.jsogService.deserializeArray(data, Movie);
    });
    this.movieService.getMovieTopFive().subscribe(data => {
      // @ts-ignore
      this.movieTopFives = this.jsogService.deserializeArray(data, Movie);
    });
  }
}
