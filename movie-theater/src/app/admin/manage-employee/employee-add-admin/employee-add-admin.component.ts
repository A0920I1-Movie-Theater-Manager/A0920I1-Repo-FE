import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CreateEmployeeDTO} from '../../../shared/model/dto/manage-employee/CreateEmployeeDTO';
import {EmployeeAccountService} from '../../../services/employee-account.service';
import {formatDate} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-add-admin',
  templateUrl: './employee-add-admin.component.html',
  styleUrls: ['./employee-add-admin.component.css']
})
export class EmployeeAddAdminComponent implements OnInit {

  employeeCreateForm: FormGroup;
  employee: CreateEmployeeDTO;
  filePath: string =  null;
  inputImage: any = null;
  defaultImage = 'https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png';

  constructor(private formBuilder: FormBuilder,
              private employeeAccountService: EmployeeAccountService,
              private toastrService: ToastrService,
              private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.employeeCreateForm = this.formBuilder.group({
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
      imageUrl: this.formBuilder.control(null, [Validators.required])
    })
    ;
  }

  onSubmit(){
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
    // this.create();
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

  getImageUrl(){
    if (this.filePath != null){
      return this.filePath;
    }
    if (this.employeeCreateForm.value.imageUrl != null){
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
