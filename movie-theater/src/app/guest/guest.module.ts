import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './promotion/promotion-list/promotion-list.component';
import { PromotionDetailComponent } from './promotion/promotion-detail/promotion-detail.component';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import {RouterModule, Routes} from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'ngx-owl-carousel-o';

const guestRoutes: Routes = [
  {path: 'home', component: MovieListComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent}
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
    RouterModule.forChild(guestRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule
  ]
})
export class GuestModule { }
