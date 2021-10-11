import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';

const loginRoutes: Routes = [
];

@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    FormsModule
  ]
})
export class LoginModule { }
