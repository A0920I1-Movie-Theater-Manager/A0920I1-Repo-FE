import { Component, OnInit } from '@angular/core';
import {ManagerMovieService} from '../../../services/manager-movie.service';
import {Movie} from '../../../shared/model/entity/Movie';

@Component({
  selector: 'app-movie-list-admin',
  templateUrl: './movie-list-admin.component.html',
  styleUrls: ['./movie-list-admin.component.css']
})
export class MovieListAdminComponent implements OnInit {
  movieList: Movie[];
  page = 1;


  constructor(private movieService: ManagerMovieService) { }

  ngOnInit(): void {
    this.movieService.getListAllMovie().subscribe((data) => {
      this.movieList = data;
      console.log(this.movieList);
    });
  }



}
