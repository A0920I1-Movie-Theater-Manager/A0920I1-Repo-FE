import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUserComponent} from './employee/manage-user/list-user/list-user.component';
import {UpdateUserComponent} from './employee/manage-user/update-user/update-user.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
