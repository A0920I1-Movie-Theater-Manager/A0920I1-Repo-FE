import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingEmployeeComponent } from './booking-employee/booking-employee.component';
import { ManageBookingEmployeeComponent } from './manage-booking-employee/manage-booking-employee.component';
import {RouterModule, Routes} from '@angular/router';
import { AddUserComponent } from './manage-user/add-user/add-user.component';
import { UpdateUserComponent } from './manage-user/update-user/update-user.component';
import { DeleteUserComponent } from './manage-user/delete-user/delete-user.component';
import { ListUserComponent } from './manage-user/list-user/list-user.component';
import { DetailUserComponent } from './manage-user/detail-user/detail-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ChartModule} from '@syncfusion/ej2-angular-charts';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {JwtModule} from '@auth0/angular-jwt';
import {AppRoutingModule} from '../app-routing.module';

const employeeRoutes: Routes = [
  {path: "listMember", component: ListUserComponent}
];

@NgModule({
  declarations: [
    BookingEmployeeComponent,
    ManageBookingEmployeeComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ListUserComponent,
    DetailUserComponent],


  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(employeeRoutes),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => sessionStorage.getItem('toke')
      }
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, // auth
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    ChartModule,
    HttpClientModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class EmployeeModule { }
