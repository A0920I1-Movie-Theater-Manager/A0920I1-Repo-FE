
import {MovieComponent} from './movie/movie.component';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {MovieSearchComponent} from './movie/movie-search/movie-search.component';
import {MovieDetailComponent} from './movie/movie-detail/movie-detail.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {RegisterComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {NotificationRegisterComponent} from './register/notification-register/notification-register.component';
import {ShowtimeListComponent} from './showtime-list/showtime-list.component';
import {PriceListComponent} from './price-list/price-list.component';
import {PromotionComponent} from './promotion/promotion.component';
import {PromotionListComponent} from './promotion/promotion-list/promotion-list.component';
import {PromotionDetailComponent} from './promotion/promotion-detail/promotion-detail.component';

const guestRoutes: Routes = [
  // TuHC
  {path: 'home', component: MovieListComponent},
  {path: 'cinema', component: MovieListComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: 'movie-search', component: MovieSearchComponent},
  // TuHC
  {path: 'register' , component: RegisterComponent},
  {path: 'price', component: PriceListComponent},
  {path: 'showtime-list', component: ShowtimeListComponent},
  {path: '', component: MovieListComponent, pathMatch: 'full'},
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
    MovieDetailComponent,
    NotificationRegisterComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(guestRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    CarouselModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  exports: [RouterModule]
})
export class GuestModule {
}
