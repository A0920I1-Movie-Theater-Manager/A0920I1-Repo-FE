import {Component, Inject, OnInit} from '@angular/core';
import {Account} from '../../../shared/model/entity/Account';
import {ManagerMovieService} from '../../../services/manager-movie.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from "@angular/common";
import {Genre} from "../../../shared/model/entity/Genre";
import {Price} from "../../../shared/model/entity/Price";
import {Movie} from "../../../shared/model/entity/Movie";

@Component({
  selector: 'app-movie-update-admin',
  templateUrl: './movie-update-admin.component.html',
  styleUrls: ['./movie-update-admin.component.css']
})
export class MovieUpdateAdminComponent implements OnInit {
  genreList: Genre[];
  accountList: Account[];
  defaultImage = 'https://cdn.tgdd.vn/Files/2020/01/14/1231516/top-10-bo-phim-hanh-dong-dang-xem-nhat-moi-thoi-dai--cap-nhat-2020-7.jpg';
  checkUpLoad = false;
  priceList: Price[];
  movie: Movie;

  public dateNow = new Date();

  constructor(
    private movieService: ManagerMovieService,
    private toastService: ToastrService,
    private router: Router,
    private active: ActivatedRoute,
    private form: FormBuilder,
    @Inject(AngularFireStorage) private storage: AngularFireStorage) { }

  // tslint:disable-next-line:variable-name
  validation_messages = {
    title: [
      {type: 'required', message: 'Vui lòng nhập tên phim.'},
      {type: 'pattern', message: 'Nhập tên phim không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
    ],
    showingFrom: [
      {type: 'required', message: 'Vui lòng nhập ngày bắt đầu.'},
      {type: 'minlength', message: 'Không được nhập ngày của quá khứ.'}
    ],
    showingTo: [
      {type: 'required', message: 'Vui lòng nhập kết thúc.'},
      {type: 'minlength', message: 'Ngày kết thúc phải lớn hơn ngày bắt đầu.'}
    ],
    cast: [
      {type: 'required', message: 'Vui lòng nhập tên diễn viên.'},
      {type: 'pattern', message: 'Nhập tên diễn viên không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
    ],
    director: [
      {type: 'required', message: 'Vui lòng nhập tên đạo diễn.'},
      {type: 'pattern', message: 'Nhập tên đạo diễn không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
    ],
    releaseDate: [
      {type: 'required', message: 'Vui lòng nhập ngày khởi chiếu.'},
      {type: 'minlength', message: 'Không được nhập ngày của quá khứ.'}
    ],
    rated: [
      {type: 'required', message: 'Vui lòng chọn giới hạn độ tuổi.'}
    ],
    runningTime: [
      {type: 'required', message: 'Vui lòng thời lượng của phim. (đơn vị phút)'},
      {type: 'pattern', message: 'Nhập thời lượng không hợp lệ'}
    ],
    production: [
      {type: 'required', message: 'Vui lòng nhập tên hãng phim.'},
      {type: 'pattern', message: 'Nhập tên hãng phim không hợp lệ.'}
    ],
    trailerUrl: [
      {type: 'required', message: 'Vui lòng nhập trailer phim.'},
    ],
    content: [
      {type: 'required', message: 'Vui lòng nội dung mô tả của phim.'},
      {type: 'pattern', message: 'Nhập nội dung mô tả không hợp lệ, không được nhập kí tự đặc biệt. (abc, abc xyz)'}
    ],
    is3D: [
      {type: 'required', message: 'Vui lòng chọn phiên bản.'}
    ],
    accountId: [
      {type: 'required', message: 'Vui lòng chọn mã nhân viên.'},
    ],
    imageUrl: [
      {type: 'required', message: 'Vui lòng chọn ảnh.'},
    ],
  };

  updateMovie = this.form.group({
    id: [''],
    title: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/),
      Validators.minLength(3), Validators.maxLength(50)]],
    showingFrom: ['', [Validators.required]],
    showingTo: ['', [Validators.required]],
    cast: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/),
      Validators.minLength(3), Validators.maxLength(50)]],
    director: ['', [Validators.required, Validators.pattern(''),
      Validators.minLength(3), Validators.maxLength(50)]],
    releaseDate: ['', [Validators.required]],
    rated: ['', [Validators.required]],
    runningTime: ['', [Validators.required, Validators.pattern('^[1-9]{1,10}$'),
      Validators.min(1), Validators.maxLength(6)]],
    production: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;]*$/),
      Validators.minLength(3), Validators.maxLength(50)]],
    trailerUrl: ['', [Validators.required]],
    content: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;]*$/),
      Validators.minLength(3), Validators.maxLength(200)]],
    is3D: ['', [Validators.required]],
    accountId: ['', [Validators.required]],
    genres: this.form.array([]),
    showtime: this.form.array([], Validators.required)
  });

  // nhớ trừ ra phần tử đầu tiên
  imageUrl = [];
  // get imageUrls(){
  //   return this.createMovie.controls.imageUrl as FormArray;
  // }
  // xử lí thêm nhiều lịch chiếu
  selectFiles(e) {
    if (e.target.files) {
      this.checkUpLoad = true;
      for (let i = 0; File.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);

        // tslint:disable-next-line:no-shadowed-variable
        reader.onload = (e: any) => {
          this.checkUpLoad = false;
          this.imageUrl.push(e.target.result);
        };
      }
    }
  }

  onCheckChange(e: any) {
    const genres: FormArray = this.updateMovie.get('genres') as FormArray;
    if (e.target.checked) {
      genres.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      genres.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          genres.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
idMovie: number;
  movieUpdate: Movie;
  ngOnInit(): void {
    this.getListAllEmployee();
    this.getAllListGenre();
    this.getListALlPrice();

    this.active.paramMap.subscribe((paramMap) => {
      this.idMovie = parseInt(paramMap.get('id'));
      console.log(this.idMovie);

      this.movieService.getMovieById(this.idMovie).subscribe((data) => {
        this.movieUpdate = data;
        // this.updateMovie.setValue(this.movieUpdate);
        this.updateMovie.patchValue({
          id: this.movieUpdate.id,
          title: this.movieUpdate.title,
          showingFrom: this.movieUpdate.showingFrom,
          showingTo: this.movieUpdate.showingTo,
          cast: this.movieUpdate.cast,
          director: this.movieUpdate.director,
          releaseDate: this.movieUpdate.releaseDate,
          rated: this.movieUpdate.rated,
          runningTime: this.movieUpdate.runningTime,
          production: this.movieUpdate.production,
          trailerUrl: this.movieUpdate.trailerUrl,
          content: this.movieUpdate.content,
          is3D: this.movieUpdate.is3D,
          accountId: this.movieUpdate.accountId,
          genres: this.movieUpdate.genres,
          showtime: this.movieUpdate.showtimes,
        });
        console.log(this.movieUpdate.movieImages)
        this.imageUrl = this.movieUpdate.movieImages;

        // this.imageUrl: this.movieUpdate.movieImages;
      })
    });
  }

  onSubmit(){
    console.log(this.showtimes.value);
    console.log(this.updateMovie.value);
    console.log(this.imageUrl);


  }

  getIdMovieByName(title){
    console.log(title.value);
    this.movieService.getIdMovieByTitle(title.value).subscribe((data) => {
      this.movie = data;
      console.log(this.movie);
    })
  }

  get showtimes() {
    return this.updateMovie.controls.showtime as FormArray;
  }

  addShowtime(){
    const showtimeForm = this.form.group({
      showtime: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.showtimes.push(showtimeForm);
  }
  deleteShowtime(index: number) {
    this.showtimes.removeAt(index);
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
  getListAllEmployee() {
    this.movieService.getListAccountByCodeEmployee().subscribe((data) => {
      this.accountList = data;
    });
  }
  getListALlPrice(){
    this.movieService.getAllListPrice().subscribe((data) => {
      this.priceList = data;
    });
  }
  getAllListGenre() {
    this.movieService.getAllListGenre().subscribe((data) => {
      this.genreList = data;
    });
  }


}
