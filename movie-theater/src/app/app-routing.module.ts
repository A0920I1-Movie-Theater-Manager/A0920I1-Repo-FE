import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListAdminComponent} from './admin/manage-employee/employee-list-admin/employee-list-admin.component';
import {EmployeeAddAdminComponent} from './admin/manage-employee/employee-add-admin/employee-add-admin.component';
import {EmployeeUpdateAdminComponent} from "./admin/manage-employee/employee-update-admin/employee-update-admin.component";
import {EmployeeDetailAdminComponent} from "./admin/manage-employee/employee-detail-admin/employee-detail-admin.component";


const routes: Routes = [
  {path: 'employee-list', component: EmployeeListAdminComponent },
  {path: 'employee-create', component: EmployeeAddAdminComponent },
  {path: 'employee-update/:id', component: EmployeeUpdateAdminComponent },
  {path: 'employee-detail/:id', component: EmployeeDetailAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
