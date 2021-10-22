import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../shared/model/entity/Movie';
import {JsogService} from 'jsog-typescript';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ShowtimeService} from '../../services/showtime.service';
import {Showtime} from '../../shared/model/entity/Showtime';
import {SeatService} from '../../services/seat.service';
import {Seat} from '../../shared/model/entity/Seat';

@Component({
  selector: 'app-booking-user',
  templateUrl: './booking-user.component.html',
  styleUrls: ['./booking-user.component.css']
})
export class BookingUserComponent implements OnInit {
  movies: any[];
  showtimes: any[] = [];
  bookingForm: FormGroup;
  movieId: number;
  showtimeId: number;
  maxDate: Date;
  minDate: Date;
  selectedMovie: any;
  seats: any[] = [];
  selectedTasks = {};

  constructor(private movieService: MovieService, private jsogService: JsogService,
              private formBuilder: FormBuilder, private showtimeService: ShowtimeService,
              private seatService: SeatService) {
  }

  ngOnInit(): void {
    this.movieService.findAllMovieShowingAndComingSoon().subscribe(data => {
      // @ts-ignore
      this.movies = this.jsogService.deserializeArray(data, Movie);
    });
    this.bookingForm = this.formBuilder.group({
      seat: this.formBuilder.array([])
    });
  }

  // TuHC - dat ve
  booking() {
    console.log(this.bookingForm.value);
  }
  // TuHC - chon phim
  onChangeMovie(newMovie) {
    this.movieId = newMovie;
    this.movieService.findMovieById(this.movieId).subscribe(data => {
      // @ts-ignore
      this.selectedMovie = this.jsogService.deserializeObject(data, Movie);
      this.minDate = this.selectedMovie.showingFrom;
      this.maxDate = this.selectedMovie.showingTo;
    });
    this.showtimeService.getShowtimeByMovieId(this.movieId).subscribe(data => {
      // @ts-ignore
      this.showtimes = this.jsogService.deserializeArray(data, Showtime);
    });
  }
  // TuHC - chon suat chieu
  onChangeShowtime(newShowtime) {
    this.showtimeId = newShowtime;
    this.seatService.getAllSeatByMovieAndShowtime(this.movieId, this.showtimeId).subscribe(data => {
      // @ts-ignore
      this.seats = this.jsogService.deserializeArray(data, Seat);
    });
  }
}
