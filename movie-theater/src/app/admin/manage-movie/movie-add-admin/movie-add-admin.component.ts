import {Component, Inject, OnInit} from '@angular/core';
import {ManagerMovieService} from '../../../services/manager-movie.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {Account} from '../../../shared/model/entity/Account';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {Screen} from '../../../shared/model/entity/Screen';

@Component({
  selector: 'app-movie-add-admin',
  templateUrl: './movie-add-admin.component.html',
  styleUrls: ['./movie-add-admin.component.css']
})
export class MovieAddAdminComponent implements OnInit {
  accountList: Account[];
  screenList: Screen[];
  filePath: string = null;
  defaultImage = 'https://cdn.tgdd.vn/Files/2020/01/14/1231516/top-10-bo-phim-hanh-dong-dang-xem-nhat-moi-thoi-dai--cap-nhat-2020-7.jpg';
  inputImage: any;
  checkUpLoad = false;

  public dateNow = new Date();

  constructor(
    private movieService: ManagerMovieService,
    private toastService: ToastrService,
    private router: Router,
    private form: FormBuilder,
    @Inject(AngularFireStorage) private storage: AngularFireStorage) { }

  // tslint:disable-next-line:variable-name
  validation_messages = {};

  createMovie = this.form.group({
    title: ['', [Validators.required]],
    showingFrom: ['', [Validators.required]],
    showingTo: ['', [Validators.required]],
    cast: ['', [Validators.required]],
    director: ['', [Validators.required]],
    releaseDate: ['', [Validators.required]],
    rated: ['', [Validators.required]],
    runningTime: ['', [Validators.required]],
    production: ['', [Validators.required]],
    showtime: ['', [Validators.required]],
    trailer: ['', [Validators.required]],
    content: ['', [Validators.required]],
    is3D: ['', [Validators.required]],
    accountId: ['', [Validators.required]],
    imageUrl: ['']
  });

  formShowtime = this.form.group({
    showtime: this.form.array([], Validators.required)
  });

  ngOnInit(): void {
    this.getListAllEmployee();
    this.getListAllScreen();


  }

  onSubmit(){
    console.log(this.showtimes.value);
  }

  get showtimes(){
    return this.formShowtime.controls.showtime as FormArray;
  }
  addShowtime(){
    const showtimeForm = this.form.group({
      showtime: ['', Validators.required]
    });
    this.showtimes.push(showtimeForm);
  }
  deleteShowtime(index: number) {
    this.showtimes.removeAt(index);
  }

  getListAllEmployee(){
    this.movieService.getListAccountByCodeEmployee().subscribe((data) => {
      this.accountList = data;
      console.log(this.accountList);
    });
  }

  getListAllScreen(){
    this.movieService.getListAllScreen().subscribe((data) => {
      this.screenList = data;
      console.log(this.screenList);
    });
  }

  showImage($event) {
    this.checkUpLoad = true;
    this.inputImage = $event.target.files[0];

    this.createMovie.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.checkUpLoad = false;
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.inputImage);
  }

  getImageUrl() {
    if (this.filePath != null) {
      return this.filePath;
    }
    if (this.createMovie.value.imageUrl != null) {
      return this.createMovie.value.imageUrl;
    }
    console.log(this.defaultImage);
    return this.defaultImage;
  }


}
