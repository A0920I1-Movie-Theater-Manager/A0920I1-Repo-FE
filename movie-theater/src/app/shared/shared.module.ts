import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const sharedRoutes: Routes = [];

@NgModule({
<<<<<<< HEAD
<<<<<<< HEAD
  declarations: [HeaderComponent, FooterComponent],
=======
    declarations: [HeaderComponent, FooterComponent],
>>>>>>> HoangLV_Manage_Employee
  exports: [
    HeaderComponent,
    FooterComponent
  ],
<<<<<<< HEAD
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes),
    FormsModule,
    MatAutocompleteModule
  ]
=======
    declarations: [HeaderComponent, FooterComponent],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
=======
>>>>>>> HoangLV_Manage_Employee
    imports: [
        CommonModule,
        RouterModule.forChild(sharedRoutes)
    ]
<<<<<<< HEAD
>>>>>>> VietNT_Account_user
=======
>>>>>>> HoangLV_Manage_Employee
})
export class SharedModule {
}
