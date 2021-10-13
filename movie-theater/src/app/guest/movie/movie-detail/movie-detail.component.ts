import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../shared/model/entity/Movie';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {JsogService} from 'jsog-typescript';
import {Comment} from '../../../shared/model/entity/Comment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movie: Movie;
  movieTopFives: Movie[];
  comments: Comment[];

  constructor(private movieService: MovieService,  private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer, private jsog: JsogService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.movieService.getDetailMovie(this.id).subscribe(data => {
      // @ts-ignore
      this.movie = this.jsog.deserializeObject(data, Movie);
    });
    this.movieService.getMovieTopFive().subscribe(data => {
      // @ts-ignore
      this.movieTopFives = this.jsog.deserializeArray(data, Movie);
    });
    this.movieService.getCommentByMovieId(this.id).subscribe(data => {
      // @ts-ignore
      this.comments = this.jsog.deserializeArray(data, Comment);
    });
  }
  // TuHC - nhung video trailer hop le
  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
  }
}
