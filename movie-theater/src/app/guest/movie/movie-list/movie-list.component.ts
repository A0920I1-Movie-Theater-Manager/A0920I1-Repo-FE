import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../shared/model/entity/Movie';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  movieShowings: Movie[];
  movieComings: Movie[];

  customOptions: OwlOptions  = {
    center: true,
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
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
    },
    nav: true
  };
  ngOnInit(): void {
    this.movieService.getAllMovie().subscribe(data => {
      Object.keys(data).forEach(key => {
        if (key === 'movieShowings'){
          this.movieShowings = data[key];
        }else if (key === 'movieComings') {
          this.movieComings = data[key];
        }
      });
      // console.log(this.movieShowings);
    });
  }
}
