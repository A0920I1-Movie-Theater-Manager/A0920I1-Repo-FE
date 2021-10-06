import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';
import {HeaderComponent} from './shared/layout/header/header.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
