import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './promotion/promotion-list/promotion-list.component';
import { PromotionDetailComponent } from './promotion/promotion-detail/promotion-detail.component';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    ShowtimeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(guestRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GuestModule { }
