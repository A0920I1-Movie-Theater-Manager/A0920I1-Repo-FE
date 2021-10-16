import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateEmployeeDTO} from '../../../shared/model/dto/manage-employee/CreateEmployeeDTO';
import {EmployeeAccountService} from '../../../services/employee-account.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {HttpErrorResponse} from "@angular/common/http";
import {formatDate} from "@angular/common";
import {finalize} from "rxjs/operators";
import {UpdateEmployeeDTO} from "../../../shared/model/dto/manage-employee/UpdateEmployeeDTO";

@Component({
  selector: 'app-employee-update-admin',
  templateUrl: './employee-update-admin.component.html',
  styleUrls: ['./employee-update-admin.component.css']
})
export class EmployeeUpdateAdminComponent implements OnInit {

  idEmployee: number;
  employeeUpdateForm: FormGroup;
  filePath: string = null;
  inputImage: any = null;
  employeeUpdate: UpdateEmployeeDTO = null;
  employee: UpdateEmployeeDTO;
  id: number;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private employeeService: EmployeeAccountService,
              private toastrService: ToastrService,
              private route: ActivatedRoute,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }




  ngOnInit(): void {
    this.employeeUpdateForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      username: this.formBuilder.control('', [Validators.required]),
      accountCode: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      fullname: this.formBuilder.control('', [Validators.required]),
      birthday: this.formBuilder.control('', [Validators.required]),
      idCard: this.formBuilder.control('', [Validators.required]),
      address: this.formBuilder.control('', [Validators.required]),
      phone: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required]),
      gender: this.formBuilder.control('', [Validators.required]),
      imageUrl: this.formBuilder.control('', [Validators.required])
    });


    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.idEmployee = parseInt(paramMap.get('id'));
      this.employeeService.getEmployeeById(this.idEmployee).subscribe((data) => {
        // @ts-ignore
        this.employee = data;
        this.filePath = this.employee.imageUrl;
        console.log(this.employeeUpdateForm);
        this.employeeUpdateForm.patchValue({
          id: this.employee.id,
          username: this.employee.username,
          accountCode: this.employee.accountCode,
          password: this.employee.password,
          fullname: this.employee.fullname,
          birthday: this.employee.birthday,
          idCard: this.employee.idCard,
          address: this.employee.address,
          phone: this.employee.phone,
          email: this.employee.email,
          gender: this.employee.gender,
          imageUrl: this.employee.imageUrl
        });
      });
    });
  }


  selectImage(event) {
    this.inputImage = event.target.files[0];
    this.employeeUpdateForm.get('imageUrl').updateValueAndValidity();
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
    return this.defaultImage;
  }

  update() {
    this.employeeService.updateEmployee(this.employeeUpdateForm.value).subscribe( data =>{
        this.toastrService.success('Bạn đã sửa thành công!');
        this.router.navigateByUrl('');
        // this.snackBar.open('Đã sữa thành công !', 'xong',{duration:2000});
      }
    );

  }
  onSubmit(){
    // const nameImage = this.getCurrentDateTime() + this.inputImage.name;
    // const fileRef = this.storage.ref(nameImage);
    //
    //     // chưa set name khi up firebase
    // this.storage.upload(nameImage, this.inputImage).snapshotChanges().pipe(
    //       finalize(() => {
    //         fileRef.getDownloadURL().subscribe((url) => {
    //           this.employeeUpdateForm.patchValue({imageUrl: url});
    //           this.update();
    //         });
    //       })
    //     ).subscribe();
    // // this.update();
    if (this.inputImage != null) {
      const imageName = formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US') + this.inputImage.name;
      const fileRef = this.storage.ref(imageName);
      this.storage.upload(imageName, this.inputImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {

            this.employeeService.updateEmployee({...this.employeeUpdateForm.value, imageUrl: url}).subscribe(
              () => {
                this.router.navigateByUrl('/').then(
                  r => this.toastrService.success(
                    'Chỉnh sửa thành công',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              },
              (error: HttpErrorResponse) => {
                this.router.navigateByUrl('/').then(
                  r => this.toastrService.error(
                    'Chỉnh sửa thất bại',
                    'Thông báo',
                    {timeOut: 3000, extendedTimeOut: 1500})
                );
              });
          });
        })
      ).subscribe();
    }else {
      this.employeeService.updateEmployee(this.employeeUpdateForm.value).subscribe(
        () => {
          this.router.navigateByUrl('/').then(
            r => this.toastrService.success(
              'Chỉnh sửa thành công',
              'Thông báo',
              {timeOut: 3000, extendedTimeOut: 1500})
          );
        },
        (error: HttpErrorResponse) => {
          this.router.navigateByUrl('/').then(
            r => this.toastrService.error(
              'Chỉnh sửa thất bại',
              'Thông báo',
              {timeOut: 3000, extendedTimeOut: 1500})
          );
        });
    }

  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}
