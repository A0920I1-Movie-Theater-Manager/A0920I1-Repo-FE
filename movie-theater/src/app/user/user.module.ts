import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookingUserComponent} from './booking-user/booking-user.component';
import {AccountUserComponent} from './account-user/account-user.component';
import {UpdateAccountUserComponent} from './account-user/update-account-user/update-account-user.component';
import {ManageBookingUserComponent} from './account-user/manage-booking-user/manage-booking-user.component';
import {HistoryPointUserComponent} from './account-user/history-point-user/history-point-user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './account-user/change-password/change-password.component';
import {NgxPaginationModule} from 'ngx-pagination';

const userRoutes: Routes = [
  {
    path: 'booking', component: BookingUserComponent
  },
  {
    path: 'updateAccount/:idUpdate', component: UpdateAccountUserComponent
  },
  {
    path: 'changePassword/:idUpdate', component: ChangePasswordComponent
  },
  {
    path: 'changePassword', component: ChangePasswordComponent
  },
  {
    path: 'manageBookingUser/:idAccount', component: ManageBookingUserComponent
  }
];

@NgModule({
  declarations: [
    BookingUserComponent,
    AccountUserComponent,
    UpdateAccountUserComponent,
    ManageBookingUserComponent,
    HistoryPointUserComponent,
    ChangePasswordComponent
  ],
  exports: [
    UpdateAccountUserComponent,
    AccountUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
  ]
})
export class UserModule {
}
