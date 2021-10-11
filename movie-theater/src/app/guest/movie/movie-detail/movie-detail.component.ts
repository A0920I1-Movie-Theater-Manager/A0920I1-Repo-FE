import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../shared/model/entity/Movie';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Genre} from '../../../shared/model/entity/Genre';
import {GenreMovie} from '../../../shared/model/entity/GenreMovie';
import {JsogService} from 'jsog-typescript';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movie: Movie;
  movieTopFives: Movie[];

  constructor(private movieService: MovieService,  private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer, private jsog: JsogService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.movieService.getDetailMovie(this.id).subscribe((data: Movie) => {
      this.movie = this.jsog.deserializeObject(data, Movie);
    });
    this.movieService.getMovieTopFive().subscribe(data => {
      this.movieTopFives = this.jsog.deserializeArray(data, Movie);
    });
  }
  // TuHC - nhung video trailer hop le
  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
  }
}
