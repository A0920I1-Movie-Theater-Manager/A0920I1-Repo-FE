import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageEmployeeComponent} from './manage-employee/manage-employee.component';
import {EmployeeListAdminComponent} from './manage-employee/employee-list-admin/employee-list-admin.component';
import {EmployeeAddAdminComponent} from './manage-employee/employee-add-admin/employee-add-admin.component';
import {EmployeeUpdateAdminComponent} from './manage-employee/employee-update-admin/employee-update-admin.component';
import {EmployeeDeleteAdminComponent} from './manage-employee/employee-delete-admin/employee-delete-admin.component';
import {ManageScreenComponent} from './manage-screen/manage-screen.component';
import {ScreenListComponent} from './manage-screen/screen-list/screen-list.component';
import {SeatDetailComponent} from './manage-screen/seat-detail/seat-detail.component';
import {ManageMovieComponent} from './manage-movie/manage-movie.component';
import {MovieListAdminComponent} from './manage-movie/movie-list-admin/movie-list-admin.component';
import {MovieAddAdminComponent} from './manage-movie/movie-add-admin/movie-add-admin.component';
import {MovieUpdateAdminComponent} from './manage-movie/movie-update-admin/movie-update-admin.component';
import {ManagePromotionComponent} from './manage-promotion/manage-promotion.component';
import {PromotionListAdminComponent} from './manage-promotion/promotion-list-admin/promotion-list-admin.component';
import {PromotionAddAdminComponent} from './manage-promotion/promotion-add-admin/promotion-add-admin.component';
import {PromotionUpdateAdminComponent} from './manage-promotion/promotion-update-admin/promotion-update-admin.component';
import {PromotionDeleteAdminComponent} from './manage-promotion/promotion-delete-admin/promotion-delete-admin.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeDetailAdminComponent} from './manage-employee/employee-detail-admin/employee-detail-admin.component';
import {NotifyEmployeeComponent} from './manage-employee/notifyEmployee/notify-employee/notify-employee.component';
import {BrowserModule} from '@angular/platform-browser';
import {UserModule} from '../user/user.module';
import {SharedModule} from '../shared/shared.module';
import {LoginModule} from '../login/login.module';
import {GuestModule} from '../guest/guest.module';
import {EmployeeModule} from '../employee/employee.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ToastrModule} from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatInputModule} from '@angular/material/input';

const adminRoutes: Routes = [
  {path: 'employee-list', component: EmployeeListAdminComponent},
  {path: 'employee-create', component: EmployeeAddAdminComponent},
  {path: 'employee-update/:id', component: EmployeeUpdateAdminComponent},
  {path: 'employee-detail/:id', component: EmployeeDetailAdminComponent}
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
    EmployeeDetailAdminComponent,
    NotifyEmployeeComponent
  ],
  exports: [
    EmployeeListAdminComponent,
    EmployeeAddAdminComponent,
    EmployeeDetailAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    NgxPaginationModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    UserModule,
    SharedModule,
    LoginModule,
    GuestModule,
    EmployeeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatButtonModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    MatInputModule
  ]
})
export class AdminModule {
}
