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
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    GuestModule,
    EmployeeModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
