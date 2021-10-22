import { Component, OnInit } from '@angular/core';
import {ManagerMovieService} from '../../../services/manager-movie.service';
import {Movie} from '../../../shared/model/entity/Movie';
import {ToastrService} from 'ngx-toastr';
import {JsogService} from 'jsog-typescript';
import {SearchMovieDTO} from '../../../shared/model/dto/SearchMovieDTO';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movie-list-admin',
  templateUrl: './movie-list-admin.component.html',
  styleUrls: ['./movie-list-admin.component.css']
})
export class MovieListAdminComponent implements OnInit {
  public movieList: Movie[];
  public page = 1;
  searchMovie: SearchMovieDTO;
  formSearch: FormGroup;

  constructor(private toastService: ToastrService,
              private movieService: ManagerMovieService,
              private jSogService: JsogService,
              private form: FormBuilder) { }

  ngOnInit(): void {
    this.movieService.getListAllMovie().subscribe((data) => {
      // @ts-ignore
      this.movieList = this.jSogService.deserializeArray(data, Movie);
      console.log(this.movieList);
    });
    this.formSearch = this.form.group({
      title: [],
      production: [],
      releaseDate: [],
      is3D: []
    });
  }

  search(){
    this.movieService.search(this.formSearch.value).subscribe((data) => {
      // @ts-ignore
      this.movieList = this.jSogService.deserializeArray(data, Movie);
      this.page = 1;
      if (this.movieList.length === 0) {
        console.log(this.movieList);
        this.toastService.error('Không tìm thấy', 'Thông báo');
      }
    });

  }

  reset(){
    window.location.reload();
  }



}
