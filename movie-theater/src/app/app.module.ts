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
import {JsogService} from 'jsog-typescript';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {JwtModule} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginnComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => sessionStorage.getItem('toke')
      }
    }),
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
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
  ],
  providers: [authInterceptorProviders,
  JsogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
