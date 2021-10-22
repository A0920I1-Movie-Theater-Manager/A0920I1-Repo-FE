import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';

const sharedRoutes: Routes = [];

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(sharedRoutes)
    ]
})
export class SharedModule { }
