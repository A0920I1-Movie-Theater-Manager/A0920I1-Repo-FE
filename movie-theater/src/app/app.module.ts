import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {ToastrModule} from 'ngx-toastr';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {ChartModule} from '@syncfusion/ej2-angular-charts';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => sessionStorage.getItem('toke')
            }
        }),
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule, // auth
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        MatIconModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxPaginationModule,
        MatDialogModule,
        MatButtonModule,
        MatDatepickerModule,
        MatSnackBarModule,
        ChartModule,
        HttpClientModule,
        MatInputModule,
        MatDatepickerModule,
        MatDatepickerModule,
        MatNativeDateModule,

        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
        }),


    ],


  bootstrap: [AppComponent]
})
export class AppModule { }
