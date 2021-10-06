import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../shared/model/entity/Movie';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
@Pipe({ name: 'safe' })
export class MovieDetailComponent implements OnInit, PipeTransform {
  id: number;
  movie: Movie;
  urlSafe: SafeResourceUrl;
  constructor(private movieService: MovieService,  private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.movieService.getDetailMovie(this.activatedRoute.snapshot.params.id).subscribe((data: Movie) => {
      this.movie = data;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
      console.log(this.movie);
    });
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
