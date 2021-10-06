import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authe.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {log} from "util";

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
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.register = new FormGroup({
      fullName: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      address: new FormControl(null),
      idCard: new FormControl(null),
      gender: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null),
      matchingPassword: new FormControl(null),
      birthday: new FormControl(null)
    });
  }

  onSubmit(register: FormGroup) {
    console.log(register.value);
    this.authService.register(register.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
