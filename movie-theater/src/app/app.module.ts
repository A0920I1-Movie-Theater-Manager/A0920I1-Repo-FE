import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import {SharedModule} from './shared/shared.module';
import {GuestModule} from './guest/guest.module';
import {EmployeeModule} from './employee/employee.module';
import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { LoginnComponent } from './loginn/loginn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginModule} from './login/login.module';
import { HomeComponent } from './home/home.component';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginnComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    SharedModule,
    LoginModule,
    GuestModule,
    EmployeeModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
