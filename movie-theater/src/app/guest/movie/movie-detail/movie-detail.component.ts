import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../shared/model/entity/Movie';
import {DomSanitizer} from '@angular/platform-browser';
import {JsogService} from 'jsog-typescript';
import {Comment} from '../../../shared/model/entity/Comment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../../services/comment.service';
import {AuthService} from '../../../services/authe.service';

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
  commentForm: FormGroup;
  comment: Comment;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer, private jsogService: JsogService,
              private formBuilder: FormBuilder, private commentService: CommentService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    // TuHC
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.movieService.findMovieById(id).subscribe(
        data => {
          // @ts-ignore
          return this.movie = this.jsogService.deserializeObject(data, Movie);
        }
      );
      this.commentService.getCommentByMovieId(id).subscribe(data => {
        // @ts-ignore
        this.comments = this.jsogService.deserializeArray(data, Comment);
        // console.log(this.comments);
      });
    });
    this.movieService.getMovieTopFive().subscribe(data => {
      // @ts-ignore
      this.movieTopFives = this.jsogService.deserializeArray(data, Movie);
    });
    // Form comment
    this.commentForm = this.formBuilder.group({
      content: this.formBuilder.control(''),
      account: this.formBuilder.control(''),
      movie: this.formBuilder.control(''),
      seen: this.formBuilder.control('')
    });
  }

  // TuHC - nhung video trailer hop le
  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
  }

  // TuHC - them moi comment
  addComment() {
    this.commentForm.patchValue({
      account: 1
    });
    this.comment = this.commentForm.value;
    this.commentService.addComment(this.comment).subscribe(data => {
      this.ngOnInit();
    });
  }
}
