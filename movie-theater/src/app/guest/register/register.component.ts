import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authe.service';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {compareValidator} from '../../common/ConfirmedValidator';
import {MatDialog} from '@angular/material/dialog';
import {NotificationRegisterComponent} from './notification-register/notification-register.component';
import {Location} from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  clickSubmit = false;
  constructor(private authService: AuthService,
              public dialog: MatDialog,
              private location: Location
  ) {
  }

  validationMessages = {
    fullName: [
      {type: 'required', message: 'Vui lòng nhập họ và tên.'},
      {type: 'maxlength', message: 'Họ và tên nhập tối đa 50 kí tự bao gồm khoảng trắng.'},
      {type: 'minlength', message: 'Vui lòng nhập ít nhất 5 kí tự bao gồm khoảng trắng.'},
      {type: 'pattern', message: 'Nhập họ và tên không hợp lệ, không được nhập số, kí tự đặc biệt.'}
    ],
    username: [
      {type: 'required', message: 'Vui lòng nhập tên người dùng.'},
      {type: 'minlength', message: 'tên người dùng tối thiểu 6 kí tự.'},
      {type: 'maxlength', message: 'Nhập tối đa 20 kí tự.'}

    ],
    phone: [
      //     Viettel: 09, 03
      //     MobiFone: 09, 07
      //     VinaPhone: 09, 08
      //     Vietnamobile và Gmobile: 09, 05
      {type: 'required', message: 'Vui lòng nhập số điện thoại.'},
      {type: 'minlength', message: 'Số điện thoại gồm 10 số.'},
      {type: 'maxlength', message: 'Số điện thoại gồm 10 số.'},
      {type: 'pattern', message: 'Bắt đầu là 0xxxxxxxxx.'}
    ],
    address: [
      {type: 'maxlength', message: 'Địa chỉ tối đa 50 kí tự.'},
      {type: 'pattern', message: 'Không được nhập kí tự đặc biệt. (!@#$%^&)'}
    ],
    idCard: [
      {type: 'required', message: 'Vui lòng nhập số CMND.'},
      {type: 'pattern', message: 'Không được nhập kí tự đặc biệt hoặc chữ.'},
      // {type: 'length', message: 'CMND có 8 hoặc 12 số.'}
    ],
    password: [
      {type: 'required', message: 'Vui lòng nhập mật khẩu.'},
      {type: 'minlength', message: 'Mật khẩu tối thiểu 6 kí tự.'},
      {type: 'maxlength', message: 'Mật khẩu tối đa 15 kí tự.'}
    ],
    matchingPassword: [
      {type: 'required', message: 'Vui lòng nhập xác nhận mật khẩu.'},
      {type: 'minlength', message: 'Mật khẩu tối thiểu 6 kí tự.'},
      {type: 'maxlength', message: 'Mật khẩu tối đa 15 kí tự.'}
    ],
    birthday: [
      {type: 'required', message: 'Vui lòng nhập ngày sinh.'}
    ],
    gender: [
      {type: 'required', message: 'Vui lòng chọn giới tính.'}
    ],
    email: [
      {type: 'required', message: 'Vui lòng nhập email.'},
      {type: 'patten', message: 'Email không đúng định dạng. (zxc123@gmail.com)'},
      {type: 'boolean', message: 'Email đã tồn tại.'}
    ]
  };

  ngOnInit(): void {
    this.register = new FormGroup({
        fullName: new FormControl(null,
          [Validators.required,
            Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/),
            Validators.maxLength(50), Validators.minLength(5)]),
        email: new FormControl(null,
          [Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
        phone: new FormControl(null,
          [Validators.required,
            Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/),
            Validators.minLength(10),
            Validators.maxLength(10)]),
        address: new FormControl(null,
          [Validators.maxLength(50),
            Validators.pattern(/^[a-zA-Z0-9]*$/), Validators.maxLength(50)]),
        idCard: new FormControl(null,
          [Validators.required,
            Validators.pattern(/\d/)]),  // id card 12 or 8 number
        gender: new FormControl(null,
          [Validators.required]),
        username: new FormControl(null,
          [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
        password: new FormControl(null,
          [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
        matchingPassword: new FormControl(null,
          [Validators.required, Validators.minLength(6), Validators.maxLength(15), compareValidator('password')]),
        birthday: new FormControl(null, Validators.required)
      },
    );
  }


  onSubmit(register: FormGroup): any {
    this.clickSubmit = true;
    console.log(register.value);
    this.authService.register(register.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.notification('Đăng kí thành công!');
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        this.isSignUpFailed = true;
        if (register.get('email').value != null){
          this.authService.checkEmail(register.get('email').value).subscribe(
          (data) => {
            if (data) {
              this.notification('Email đã tồn tại');
              stop();
              // this.errorEmail = 'Email đã tồn tại';
            }
          }
        );
        }
        if (register.get('phone').value != null){
        this.authService.checkPhone(register.get('phone').value).subscribe(
          (data) => {
            if (data) {
              this.notification('Số điện thoại đã tồn tại');
              stop();
              // this.errorPhone = 'Số điện thoại đã tồn tại';
            }
          }
        );
        }
        if (register.get('username').value != null){
        this.authService.checkUsername(register.get('username').value).subscribe(
          (data) => {
            if (data) {
              this.notification('Tài khoản đã tồn tại');
              stop();
              // this.errorPhone = 'Số điện thoại đã tồn tại';
            }
          }
        );
        }
      }
    );

  }

  notification(message: string) {
    const dialogRef = this.dialog.open(NotificationRegisterComponent,
      {
        data: {
          message
        },
        width: '400px'
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }

  back() {
    this.location.back();
  }
}

