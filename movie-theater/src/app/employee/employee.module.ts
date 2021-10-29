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
import {NavbarLeftComponent} from '../admin/navbar-left/navbar-left.component';

const employeeRoutes: Routes = [
  {
    path: 'h', component: ListUserComponent
  }
];


@NgModule({
  declarations: [
    BookingEmployeeComponent,
    ManageBookingEmployeeComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ListUserComponent,
    DetailUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes)
  ]
})
export class EmployeeModule { }
