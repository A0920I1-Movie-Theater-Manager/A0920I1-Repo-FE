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

const userRoutes: Routes = [
  {path: 'booking', component: BookingUserComponent}
];

@NgModule({
  declarations: [
    BookingUserComponent,
    AccountUserComponent,
    UpdateAccountUserComponent,
    ManageBookingUserComponent,
    HistoryPointUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule
  ]
})
export class UserModule {
}
