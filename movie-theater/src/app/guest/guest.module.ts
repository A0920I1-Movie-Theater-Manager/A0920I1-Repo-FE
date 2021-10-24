import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './promotion/promotion-list/promotion-list.component';
import { PromotionDetailComponent } from './promotion/promotion-detail/promotion-detail.component';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotificationRegisterComponent } from './register/notification-register/notification-register.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
>>>>>>> AnhLT-Login

const guestRoutes: Routes = [
  {path: 'register' , component: RegisterComponent}
];

@NgModule({
  declarations: [
    RegisterComponent,
    PriceListComponent,
    PromotionComponent,
    PromotionListComponent,
    PromotionDetailComponent,
    ShowtimeListComponent,
<<<<<<< HEAD
    MovieComponent,
    MovieListComponent,
    MovieSearchComponent,
    MovieDetailComponent
=======
    NotificationRegisterComponent
>>>>>>> AnhLT-Login
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(guestRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class GuestModule { }
