import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListAdminComponent} from './admin/manage-employee/employee-list-admin/employee-list-admin.component';

const routes: Routes = [
  {path: 'employee-list', component: EmployeeListAdminComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
