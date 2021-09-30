import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingUserComponent } from './booking-user/booking-user.component';
import { AccountUserComponent } from './account-user/account-user.component';
import { UpdateAccountUserComponent } from './account-user/update-account-user/update-account-user.component';
import { ManageBookingUserComponent } from './account-user/manage-booking-user/manage-booking-user.component';
import { HistoryPointUserComponent } from './account-user/history-point-user/history-point-user.component';
import {RouterModule, Routes} from '@angular/router';

const userRoutes: Routes = [];

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
    RouterModule.forChild(userRoutes)
    ]
})
export class UserModule { }
