import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { EmployeeListAdminComponent } from './manage-employee/employee-list-admin/employee-list-admin.component';
import { EmployeeAddAdminComponent } from './manage-employee/employee-add-admin/employee-add-admin.component';
import { EmployeeUpdateAdminComponent } from './manage-employee/employee-update-admin/employee-update-admin.component';
import { EmployeeDeleteAdminComponent } from './manage-employee/employee-delete-admin/employee-delete-admin.component';
import { ManageScreenComponent } from './manage-screen/manage-screen.component';
import { ScreenListComponent } from './manage-screen/screen-list/screen-list.component';
import { SeatDetailComponent } from './manage-screen/seat-detail/seat-detail.component';
import { ManageMovieComponent } from './manage-movie/manage-movie.component';
import { MovieListAdminComponent } from './manage-movie/movie-list-admin/movie-list-admin.component';
import { MovieAddAdminComponent } from './manage-movie/movie-add-admin/movie-add-admin.component';
import { MovieUpdateAdminComponent } from './manage-movie/movie-update-admin/movie-update-admin.component';
import { ManagePromotionComponent } from './manage-promotion/manage-promotion.component';
import { PromotionListAdminComponent } from './manage-promotion/promotion-list-admin/promotion-list-admin.component';
import { PromotionAddAdminComponent } from './manage-promotion/promotion-add-admin/promotion-add-admin.component';
import { PromotionUpdateAdminComponent } from './manage-promotion/promotion-update-admin/promotion-update-admin.component';
import { PromotionDeleteAdminComponent } from './manage-promotion/promotion-delete-admin/promotion-delete-admin.component';
import {RouterModule, Routes} from '@angular/router';

const adminRoutes: Routes = [];

@NgModule({
  declarations: [
    ManageEmployeeComponent,
    EmployeeListAdminComponent,
    EmployeeAddAdminComponent,
    EmployeeUpdateAdminComponent,
    EmployeeDeleteAdminComponent,
    ManageScreenComponent,
    ScreenListComponent,
    SeatDetailComponent,
    ManageMovieComponent,
    MovieListAdminComponent,
    MovieAddAdminComponent,
    MovieUpdateAdminComponent,
    ManagePromotionComponent,
    PromotionListAdminComponent,
    PromotionAddAdminComponent,
    PromotionUpdateAdminComponent,
    PromotionDeleteAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
