import {Component, Inject, OnInit} from '@angular/core';
import {Account} from '../../../shared/model/entity/Account';
import {ManagerMovieService} from '../../../services/manager-movie.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-movie-update-admin',
  templateUrl: './movie-update-admin.component.html',
  styleUrls: ['./movie-update-admin.component.css']
})
export class MovieUpdateAdminComponent implements OnInit {
  accountList: Account[];
  filePath: string = null;
  defaultImage = 'https://cdn.tgdd.vn/Files/2020/01/14/1231516/top-10-bo-phim-hanh-dong-dang-xem-nhat-moi-thoi-dai--cap-nhat-2020-7.jpg';
  inputImage: any;
  checkUpLoad = false;

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
      {type: 'pattern', message: 'Nhập tên đạo diễn không hợp lệ, không được nhập số, kí tự đặc biệt. (abc, abc xyz)'}
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
    title: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/)]],
    showingFrom: ['', [Validators.required]],
    showingTo: ['', [Validators.required]],
    cast: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/)]],
    director: ['', [Validators.required], Validators.pattern('')],
    releaseDate: ['', [Validators.required]],
    rated: ['', [Validators.required]],
    runningTime: ['', [Validators.required, Validators.pattern('^[1-9]{1,10}$'),
      Validators.min(1), Validators.maxLength(10)]],
    production: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/)]],
    trailerUrl: ['', [Validators.required]],
    content: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/)]],
    is3D: ['', [Validators.required]],
    accountId: ['', [Validators.required]],
  });

  formShowtime = this.form.group({
    showtime: this.form.array([], Validators.required)
  });

  formImageMovie = this.form.group({
    imageUrl: this.form.array([], Validators.required)
  });

  ngOnInit(): void {
    this.getListAllEmployee();

  }

  onSubmit(){
    console.log(this.showtimes.value);
    console.log(this.updateMovie.value);


  }

  // xử lí thêm nhiều lịch chiếu
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

}
