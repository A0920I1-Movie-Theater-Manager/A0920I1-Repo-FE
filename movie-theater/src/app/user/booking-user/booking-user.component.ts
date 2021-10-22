<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../shared/model/entity/Movie';
import {JsogService} from 'jsog-typescript';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ShowtimeService} from '../../services/showtime.service';
import {Showtime} from '../../shared/model/entity/Showtime';
import {SeatService} from '../../services/seat.service';
import {Seat} from '../../shared/model/entity/Seat';
=======
import {Component, Inject, OnInit} from '@angular/core';
import {AccountUserServiceService} from '../../services/account-user-service.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Account} from '../../shared/model/entity/Account';
import {ManagerBooking} from '../../shared/model/dto/Viet/ManagerBooking';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
>>>>>>> VietNT_Account_user

@Component({
  selector: 'app-booking-user',
  templateUrl: './booking-user.component.html',
  styleUrls: ['./booking-user.component.css']
})
export class BookingUserComponent implements OnInit {
<<<<<<< HEAD
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
=======
  idAccount: any;
  booking: ManagerBooking[];
  filePath: string = null;
  inputImage: any = null;
  accountUpdate: Account;
  account: Account[];
  uploading: boolean;
  idUpdate: number;
  name: any;
  totalpoint: any;
  url: any;
  page = 1

  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';

  constructor(private accountService: AccountUserServiceService,
              private  toastrService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  accountUpdateForm = this.formBuilder.group({
    imageUrl: [''],
    totalPoint: [('')],
    fullname: [('')],
  });


  ngOnInit(): void {

    this.idAccount = this.activatedRoute.snapshot.params.idAccount;
    console.log(this.idAccount);
    this.accountService.findAccountUserId(this.idAccount).subscribe((data) => {
      console.log(this.idAccount)
      this.accountUpdate = data;
      this.accountUpdateForm = this.formBuilder.group({
        imageUrl: [this.accountUpdate.imageUrl],
        totalPoint: [this.accountUpdate.totalPoint],
        fullname: [this.accountUpdate.fullname],
      });
      this.name = this.accountUpdate.fullname;
      this.totalpoint = this.accountUpdate.totalPoint;
    });
    this.managerBooking();
  }
managerBooking(){
  this.accountService.findBooking().subscribe(data => {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.idAccount = (paramMap.get('idAccount'));
        // tslint:disable-next-line:no-shadowed-variable
        this.accountService.findAllByIdBooking(this.idAccount).subscribe((data) => {
          if (data.length === 0) {
            this.toastrService.info('Bạn chưa đặt vé nào cả', 'Thông Báo');
          }
          this.booking = data;
          console.log(this.booking[0].received);
        });
      }
    );
  });
}

  getImageUrl() {
    if (this.filePath != null) {
      return this.filePath;
    }
    if (this.accountUpdateForm.value.imageUrl != null) {
      return this.accountUpdateForm.value.imageUrl;
    } else {
      return this.defaultImage;
    }
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.accountUpdateForm.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.inputImage);
>>>>>>> VietNT_Account_user
  }
}
