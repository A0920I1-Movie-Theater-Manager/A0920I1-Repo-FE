import {Component, Inject, OnInit} from '@angular/core';
import {AccountUserServiceService} from '../../../services/account-user-service.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {Account} from '../../../shared/model/entity/Account';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private  accountUserService: AccountUserServiceService,
              private  toastrService: ToastrService,
              private router: Router,
              private  formBuilder: FormBuilder,
              private  activatedRoute: ActivatedRoute,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }


  filePath: string = null;
  inputImage: any = null;
  accountUpdate: Account
  account: Account[];
  uploading: boolean;
  idUpdate: number;
  name: any;
  totalpoint: any;
  url: any;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';

  validationMessage = {
    password: [
      {type: 'required', message: 'Mật khẩu không được để trống.'},
      {type: 'pattern', message: 'Mật khẩu bao gồm chữ cái đầu viết hoa vsố và phải có kí tự đặc biệt.'},
      ]
  };
  accountUpdateForm = this.formBuilder.group({
    id: [('')],
    accountCode: [('')],
    username: [('')],
    password: ['', Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)],
    totalPoint: [('')],
    fullname: ['', [Validators.required, Validators.pattern(/^[^`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|0-9]*$/), Validators.minLength(4), Validators.maxLength(20)]],
    imageUrl: [''],
  });

  ngOnInit(): void {
    this.idUpdate = this.activatedRoute.snapshot.params.idUpdate;
    console.log(this.idUpdate);
    this.accountUserService.findAccountUserId(this.idUpdate).subscribe((data) => {
      this.accountUpdate = data;
      this.accountUpdateForm = this.formBuilder.group({
        id: [(this.accountUpdate.id)],
        accountCode: [this.accountUpdate.accountCode],
        username: [this.accountUpdate.username],
        password: ['', Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)],
        imageUrl: [this.accountUpdate.imageUrl],
      });
      this.name = this.accountUpdate.fullname;
      this.totalpoint = this.accountUpdate.totalPoint;

    });


  }

  getImageUrl(){
    if (this.filePath != null){
      return this.filePath;
    }
    if (this.accountUpdateForm.value.imageUrl != null){
      return this.accountUpdateForm.value.imageUrl;
    } else {return this.defaultImage; }
  }

  changepassword() {
    if (this.inputImage != null) {
      const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.accountUserService.updateAccountUser({...this.accountUpdateForm.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('updateAccount/' + this.idUpdate).then(
                  r => this.toastrService.success(
                    'Chỉnh sửa thành công',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              },
              (error: HttpErrorResponse) => {
                this.router.navigateByUrl('updateAccount/' + this.idUpdate).then(
                  r => this.toastrService.error(
                    'Chỉnh sửa thất bại',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              });
          });
        })
      ).subscribe();
    } else {
      if (this.accountUpdateForm.invalid) {
        this.toastrService.error('Bạn đã  Cập nhận thông tin tài khoản không thành công!', 'Thông báo')
        return;
      }
      this.accountUserService.updateAccountUser(this.accountUpdateForm.value).subscribe((data) => {
        this.toastrService.success('Bạn đã  Cập nhận thông tin tài khoản  thành công!', 'Thông báo')
        this.router.navigateByUrl('updateAccount/' + this.idUpdate);
      });
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
  }
  /*uploadImage(){
    this.storage.upload('/files' + Math.random() + this.inputImage, this.inputImage);
  }*/
}
