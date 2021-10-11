import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieListComponent} from './guest/movie/movie-list/movie-list.component';
import {MovieDetailComponent} from './guest/movie/movie-detail/movie-detail.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
