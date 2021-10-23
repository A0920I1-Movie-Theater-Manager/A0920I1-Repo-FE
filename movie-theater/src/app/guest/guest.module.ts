import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {PriceListComponent} from './price-list/price-list.component';
import {PromotionComponent} from './promotion/promotion.component';
import {PromotionListComponent} from './promotion/promotion-list/promotion-list.component';
import {PromotionDetailComponent} from './promotion/promotion-detail/promotion-detail.component';
import {ShowtimeListComponent} from './showtime-list/showtime-list.component';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {MovieSearchComponent} from './movie/movie-search/movie-search.component';
import {MovieDetailComponent} from './movie/movie-detail/movie-detail.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const guestRoutes: Routes = [
  {path: 'home', component: MovieListComponent},
  {path: '', component: MovieListComponent, pathMatch: 'full'},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: 'movie-search', component: MovieSearchComponent},
];

@NgModule({
  declarations: [
    RegisterComponent,
    PriceListComponent,
    PromotionComponent,
    PromotionListComponent,
    PromotionDetailComponent,
    ShowtimeListComponent,
    MovieComponent,
    MovieListComponent,
    MovieSearchComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    RouterModule.forChild(guestRoutes)
  ],
  exports: [RouterModule]
})
export class GuestModule {
}
