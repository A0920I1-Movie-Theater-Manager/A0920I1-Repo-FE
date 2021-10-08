import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account} from '../../../shared/model/entity/Account';
import {ManagerUserService} from '../../../services/manager-user.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {ToastrService} from 'ngx-toastr';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  createMembers: FormGroup;
  members: Account;
  filePath: string = null;
  inputImage: any = null;
  listError: any = '';
  defaultImage: string;
  idMember: number;

  constructor(private managerUserService: ManagerUserService, private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage, private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private formBuilder: FormBuilder,) {
  }

  validationMessage = {
    username: [
      {type: 'required', message: 'Tên đăng nhập không được để trống.'},
      {type: 'minlength', message: 'Tên đăng nhập phải tối thiểu 4 ký tự.'},
      {type: 'maxlength', message: 'Tên đăng nhập tối đa 32 ký tự.'},
      {type: 'pattern', message: 'Tên đăng nhập không được nhập ký tự đặc biệt.'}
    ],
    accountCode: [
      {type: 'required', message: 'Mã thành viên không được để trống.'},
      {type: 'pattern', message: 'Mã thành viên không được nhập ký tự đặc biệt.'}

    ],
    password: [
      {type: 'required', message: 'Mật khẩu không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập mật khẩu đúng định dạng.'}

    ],
    fullname: [
      {type: 'required', message: 'Tên thành viên không được để trống.'},
      {type: 'pattern', message: 'Tên thành viên không được nhập ký tự đặc biệt và số.'}

    ],
    birthday: [
      {type: 'required', message: 'Ngày sinh không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập đúng định dạng.'}

    ],
    idCard: [
      {type: 'required', message: 'Số chứng minh không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập ký tự số.'}

    ],
    address: [
      {type: 'required', message: 'Địa chỉ không được để trống.'}

    ],
    phone: [
      {type: 'required', message: 'Số điện thoại không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập đúng định dạng bắt đầu bằng 84.'}

    ],
    email: [
      {type: 'required', message: 'Email không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập email đúng định dạng.'}

    ],
    gender: [
      {type: 'required', message: 'Giới tính không được để trống.'}

    ]
  };

  ngOnInit(): void {
    this.createMembers = this.formBuilder.group({
      username: ['', [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32),
        Validators.pattern("^[\\D]+$")]],
      accountCode: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fullname: [''],
      birthday: [''],
      idCard: [''],
      address: [''],
      phone: [''],
      email: [''],
      gender: [''],
      imageUrl:['']
    });
  }


  onSubmit() {
    if (this.inputImage != null) {
      const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.managerUserService.createNewMember({...this.createMembers.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('/listMember').then(
                  re => this.toastrService.success(
                    'Bạn đã cập nhật thành công',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              },
              (error: HttpErrorResponse) => {
                console.log(error);
                if (error.status === 400) {
                  console.log(error.error);
                  this.listError = error.error;
                }
                this.toastrService.error(
                  'Bạn đã cập nhật thất bại',
                  'Thông báo',
                  {timeOut: 3000, extendedTimeOut: 1500});

              });
          });
        })
      ).subscribe();
    } else {
      this.managerUserService.createNewMember(this.createMembers.value).subscribe(
        () => {
          this.router.navigateByUrl('/listMember').then(
            r => this.toastrService.success(
              'Bạn đã cập nhật thành công',
              'Thông báo',
              {timeOut: 3000, extendedTimeOut: 1500})
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          // tslint:disable-next-line:triple-equals
          if (error.status == 400) {
            console.log(error.error);
            this.listError = error.error;
          }

          this.toastrService.error(
            'Bạn đã cập nhật thất bại',
            'Thông báo',
          );
        });
    }
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.createMembers.get('imageUrl').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.inputImage);
  }

  getImageUrl() {
    if (this.filePath != null) {
      return this.filePath;
    }
    if(this.members.imageUrl){
      return this.members.imageUrl;
    }
  }

}
