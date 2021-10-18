import { NgModule } from '@angular/core';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { EmployeeListAdminComponent } from './manage-employee/employee-list-admin/employee-list-admin.component';
import { EmployeeAddAdminComponent } from './manage-employee/employee-add-admin/employee-add-admin.component';
import { EmployeeUpdateAdminComponent } from './manage-employee/employee-update-admin/employee-update-admin.component';
import { EmployeeDeleteAdminComponent } from './manage-employee/employee-delete-admin/employee-delete-admin.component';
import { ManageScreenComponent } from './manage-screen/manage-screen.component';
import { ScreenListComponent } from './manage-screen/screen-list/screen-list.component';
import { SeatDetailComponent } from './manage-screen/seat-detail/seat-detail.component';
import { ManageMovieComponent } from './manage-movie/manage-movie.component';
import { MovieListAdminComponent } from './manage-movie/movie-list-admin/movie-list-admin.component';
import { MovieAddAdminComponent } from './manage-movie/movie-add-admin/movie-add-admin.component';
import { MovieUpdateAdminComponent } from './manage-movie/movie-update-admin/movie-update-admin.component';
import { ManagePromotionComponent } from './manage-promotion/manage-promotion.component';
import { PromotionListAdminComponent } from './manage-promotion/promotion-list-admin/promotion-list-admin.component';
import { PromotionAddAdminComponent } from './manage-promotion/promotion-add-admin/promotion-add-admin.component';
import { PromotionUpdateAdminComponent } from './manage-promotion/promotion-update-admin/promotion-update-admin.component';
import { PromotionDeleteAdminComponent } from './manage-promotion/promotion-delete-admin/promotion-delete-admin.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {NgxPaginationModule} from 'ngx-pagination';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MovieDetailsAdminComponent } from './manage-movie/movie-details-admin/movie-details-admin.component';
import {NgbAlertModule, NgbCarouselModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';

const adminRoutes: Routes = [
  {path: 'list-movie', component: MovieListAdminComponent},
  {path: 'update-movie/:id', component: MovieUpdateAdminComponent},
  {path: 'create-movie', component: MovieAddAdminComponent},
  {path: 'show-details-movie/:id', component: MovieDetailsAdminComponent},
];

@NgModule({
  declarations: [
    ManageEmployeeComponent,
    EmployeeListAdminComponent,
    EmployeeAddAdminComponent,
    EmployeeUpdateAdminComponent,
    EmployeeDeleteAdminComponent,
    ManageScreenComponent,
    ScreenListComponent,
    SeatDetailComponent,
    ManageMovieComponent,
    MovieListAdminComponent,
    MovieAddAdminComponent,
    MovieUpdateAdminComponent,
    ManagePromotionComponent,
    PromotionListAdminComponent,
    PromotionAddAdminComponent,
    PromotionUpdateAdminComponent,
    PromotionDeleteAdminComponent,
    NavbarLeftComponent,
    MovieDetailsAdminComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, // auth
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    HttpClientModule,
    RouterModule.forChild(adminRoutes),
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbCarouselModule,
    MatCardModule
  ]
})
export class AdminModule { }
