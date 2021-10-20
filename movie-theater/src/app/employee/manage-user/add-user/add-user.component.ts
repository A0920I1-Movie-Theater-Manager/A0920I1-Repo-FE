import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account} from '../../../shared/model/entity/Account';
import {ManagerUserService} from '../../../services/manager-user.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {ToastrService} from 'ngx-toastr';
import {AccountMemberDTO} from '../../../shared/model/dto/AccountMemberDTO';
import {HttpErrorResponse} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {compareValidator} from '../ValidateCustomMembers/checkPassword';
import {checkDateOfBirth} from '../ValidateCustomMembers/checkBirthday';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  createMembers: FormGroup;
  members: AccountMemberDTO;
  filePath: string = null;
  inputImage: any = null;
  listError: any = '';
  roles = [];
  clickSubmit: false;
  defaultImage ='https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg';

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
      {type: 'checkAge', message: 'Tuổi phải trên 16.'}

    ],
    idCard: [
      {type: 'required', message: 'Số chứng minh không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập ký tự số.'}

    ],
    address: [
      {type: 'required', message: 'Vui lòng nhập địa chỉ.'}

    ],
    phone: [
      {type: 'required', message: 'Số điện thoại không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập số địện thoại đúng định dạng 0xxxxxxxx  or (84)xxxxxxx'}

    ],
    email: [
      {type: 'required', message: 'Email không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập email theo định dạng abc@abc.'}

    ],
    gender: [
      {type: 'required', message: 'Vui lòng chọn giới tính.'}

    ],
    newPassword: [
      {type: 'required', message: 'Mật khẩu không được để trống.'},
      {type: 'pattern', message: 'Vui lòng nhập mật khẩu đúng định dạng.'}

    ],
    roleId: [
      {type: 'required', message: 'Vui lòng chọn quyền truy cập.'},
    ]

  };

  ngOnInit(): void {
    this.roles = [{id: 1, name: 'ADMIN'},
      {id: 2, name: 'USER'}];

    this.createMembers = this.formBuilder.group({
      username:this.formBuilder.control( '', [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32),
        Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:]*$/)]),
      accountCode:this.formBuilder.control( '', [Validators.required,Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:]*$/)]),
      password: this.formBuilder.control( '', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,32}$')]),
      fullname: this.formBuilder.control( '', [Validators.required,Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/)]),
      birthday: this.formBuilder.control( '', [Validators.required,checkDateOfBirth]),
      idCard: this.formBuilder.control( '', [Validators.required,Validators.pattern('^[0-9]*$')]),
      address: this.formBuilder.control( '', [Validators.required]),
      phone: this.formBuilder.control( '', [Validators.required,Validators.pattern('^(0|\\(\\+84\\))\\d{9}$')]),
      email: this.formBuilder.control( '', [Validators.required,Validators.pattern('^[a-zA-Z0-9_!#$%&\'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$')]),
      gender: this.formBuilder.control( '', [Validators.required]),
      roleId: this.formBuilder.control('', [Validators.required]),
      imageUrl:this.formBuilder.control( 'https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg'),
      newPassword: this.formBuilder.control('',[compareValidator('password')])
    });
  }

code: string;
  onSubmit() {
      if (this.inputImage != null) {
        const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
        const fileRef = this.storage.ref(imageName);
        this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.managerUserService.createNewMember({...this.createMembers.value, imageUrl: url}).subscribe(
                () => {
                  this.router.navigateByUrl('/list-member').then(
                    re => this.toastrService.success(
                      'Bạn đã thêm mới thành công',
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
                    'Bạn đã thêm mới thất bại',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500});

                });
            });
          })
        ).subscribe();
      } else {
        this.managerUserService.createNewMember(this.createMembers.value).subscribe(
          () => {
            this.router.navigateByUrl('/list-member').then(
              r => this.toastrService.success(
                'Bạn đã thêm mới thành công',
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
              'Bạn đã thêm mới thất bại',
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
    if(this.createMembers.value.imageUrl != null){
      return this.createMembers.value.imageUrl;
    }
    return this.defaultImage;
}
}
