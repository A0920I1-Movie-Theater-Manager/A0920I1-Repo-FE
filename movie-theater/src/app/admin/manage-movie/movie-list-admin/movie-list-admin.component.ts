import { Component, OnInit } from '@angular/core';
import {ManagerMovieService} from '../../../services/manager-movie.service';
import {Movie} from '../../../shared/model/entity/Movie';
import {ToastrService} from 'ngx-toastr';
import {JsogService} from 'jsog-typescript';

@Component({
  selector: 'app-movie-list-admin',
  templateUrl: './movie-list-admin.component.html',
  styleUrls: ['./movie-list-admin.component.css']
})
export class MovieListAdminComponent implements OnInit {
  public movieList: Movie[];
  public page = 1;
  public titleSearch = null;

  constructor(private toastService: ToastrService,
              private movieService: ManagerMovieService,
              private jSogService: JsogService) { }

  ngOnInit(): void {
    this.movieService.getListAllMovie().subscribe((data) => {
      // @ts-ignore
      this.movieList = this.jSogService.deserializeArray(data, Movie);
      console.log(this.movieList);
    });
  }

  searchMovieByName(){
    console.log(this.titleSearch);
    this.movieService.findMovieByName(this.titleSearch).subscribe((data) => {
      // @ts-ignore
      this.movieList = this.jSogService.deserializeArray(data, Movie);
      this.page = 1;
      if (this.movieList.length === 0) {
        console.log(this.movieList);
        this.toastService.error('Không tìm thấy', 'Thông báo');
      }
    });

  }



}
