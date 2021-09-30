import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingEmployeeComponent } from './booking-employee/booking-employee.component';
import { ManageBookingEmployeeComponent } from './manage-booking-employee/manage-booking-employee.component';
import { ManageUserEmployeeComponent } from './manage-user-employee/manage-user-employee.component';
import {RouterModule, Routes} from '@angular/router';

const employeeRoutes: Routes = [];

@NgModule({
  declarations: [
    BookingEmployeeComponent,
    ManageBookingEmployeeComponent,
    ManageUserEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes)
  ]
})
export class EmployeeModule { }
