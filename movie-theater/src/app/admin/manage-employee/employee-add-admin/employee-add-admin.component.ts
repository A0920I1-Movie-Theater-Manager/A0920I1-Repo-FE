import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CreateEmployeeDTO} from '../../../shared/model/dto/manage-employee/CreateEmployeeDTO';
import {EmployeeAccountService} from '../../../services/employee-account.service';
import {formatDate} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-add-admin',
  templateUrl: './employee-add-admin.component.html',
  styleUrls: ['./employee-add-admin.component.css']
})
export class EmployeeAddAdminComponent implements OnInit {

  employeeCreateForm: FormGroup;
  employee: CreateEmployeeDTO;
  filePath: string = null;
  inputImage: any = null;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';

  constructor(private formBuilder: FormBuilder,
              private employeeAccountService: EmployeeAccountService,
              private toastrService: ToastrService,
              private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  validationMessage = {
    username: [
      {type: 'required', message: 'Tên đăng nhập không được để trống!'},
      {type: 'minlength', message: 'Tên đăng nhập tối thiểu 4 ký tự'},
      {type: 'maxlength', message: 'Tên đăng nhập tối đa 32 ký tự'},
      {type: 'pattern', message: 'Tên đăng nhập không chứa dấu ký tự đặc biệt hoặc khoảng trắng'}
    ],
    accountCode: [
      {type: 'required', message: 'Mã nhân viên không được để trống!'},
    ],
    password:[
      {type: 'required', message: 'Mật khẩu không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu tối thiểu 4 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu tối đa 32 ký tự'}
    ],
    birthday:[
      {type: 'required', message: 'Ngày sinh không được để trống!'}
    ],
    fullname: [
      {type: 'required', message: 'Họ và tên không được để trống!'},
      {type: 'maxlength', message: 'Họ và tên dài tối đa 100 ký tự'},
      {type: 'pattern', message: 'Họ và tên không chứa ký tự số hoặc ký tự đặc biệt'}
    ],
    email: [
      {type: 'required', message: 'Email không được để trống!'},
      {type: 'email', message: 'Email không đúng định dạng'}
    ],
    gender: [
      {type: 'required', message: 'Giới tính không được để trống!'}
    ],
    idCard: [
      {type: 'required', message: 'Email không được để trống!'}
    ],
    address: [
      {type: 'required', message: 'Đia chỉ không được để trống!'},
    ],
    phone: [
      {type: 'required', message: 'Số điện thoại không được để trống!'},
    ],
    imageUrl: [
      {type: 'pattern', message: 'Chỉ chấp nhận file jpg, png, jpeg'}
    ]
  };


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.employeeCreateForm = this.formBuilder.group({
        username: this.formBuilder.control('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(32)]),
        accountCode: this.formBuilder.control('', [
          Validators.required]),
        password: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)]),
        fullname: this.formBuilder.control('', [
          Validators.required,
          Validators.maxLength(100)]),
        birthday: this.formBuilder.control('', [
          Validators.required]),
        idCard: this.formBuilder.control('', [
          Validators.required]),
        address: this.formBuilder.control('', [
          Validators.required]),
        phone: this.formBuilder.control('', [
          Validators.required]),
        email: this.formBuilder.control('', [
          Validators.required]),
        gender: this.formBuilder.control('', [
          Validators.required]),
        imageUrl: this.formBuilder.control(null, [
          Validators.required])
      }
      // ,
      // {
      //   Validators: this.MustMatch('password', 'password')
      // }
    );
  }

  // MustMatch(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     console.log(password, confirmPassword)
  //     const  control = formGroup.controls[password];
  //     const matchingControl = formGroup.controls[confirmPassword];
  //
  //     if(control.value !== matchingControl.value){
  //       matchingControl.setErrors({MustMatch: true});
  //     }else {
  //       matchingControl.setErrors(null);
  //     }
  //   };
  // }

  onSubmit() {
    console.log(this.filePath);
    const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
    const fileRef = this.storage.ref(imageName);
    this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.employeeCreateForm.patchValue({imageUrl: url});
          this.create();
        });
      })
    ).subscribe();
  }

  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.employeeCreateForm.get('imageUrl').updateValueAndValidity();
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
    if (this.employeeCreateForm.value.imageUrl != null) {
      return this.employeeCreateForm.value.imageUrl;
    }
    return this.defaultImage;
  }

  create() {
    this.employeeAccountService.createEmployeeAccount(this.employeeCreateForm.value).subscribe(data => {
        this.employeeCreateForm = data;
        this.toastrService.success('Bạn đã thêm thành công!');
        this.router.navigateByUrl('');
        // this.snackBar.open('Đã sữa thành công !', 'xong',{duration:2000});
      }
    );
  }


}
