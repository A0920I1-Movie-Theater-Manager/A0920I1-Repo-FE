import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './login/login.module';
import {GuestModule} from './guest/guest.module';
import {EmployeeModule} from './employee/employee.module';
import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JsogService} from 'jsog-typescript';
import {StaticPageModule} from './static-page/static-page.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UserModule,
    SharedModule,
    LoginModule,
    GuestModule,
    EmployeeModule,
    AdminModule,
    StaticPageModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    JsogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
