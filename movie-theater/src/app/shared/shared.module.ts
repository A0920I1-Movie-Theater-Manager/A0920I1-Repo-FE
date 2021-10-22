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
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
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
    imports: [
        CommonModule,
        RouterModule.forChild(sharedRoutes)
    ]
>>>>>>> VietNT_Account_user
})
export class SharedModule {
}
