import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginnComponent} from './loginn/loginn.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './guest/register/register.component';
import {PageNotFoundComponent} from './static-page/page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {AuthGuardService} from './services/AuthGuardService';

const routes: Routes = [


  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // { path: 'login', component: LoginnComponent },
  // { path: 'register', component: RegisterComponent },
  // {path: '**', component: PageNotFoundComponent}
  { path: 'login', component: LoginnComponent},
  // { path: 'register', component: RegisterComponent },
  // {path: '*', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
