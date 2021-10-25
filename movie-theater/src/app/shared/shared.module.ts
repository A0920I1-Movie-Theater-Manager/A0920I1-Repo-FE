import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {AboutUsComponent} from '../static-page/about-us/about-us.component';
import {EventComponent} from '../static-page/event/event.component';
import {ExamplePageComponent} from '../static-page/example-page/example-page.component';
import {FaqComponent} from '../static-page/faq/faq.component';
import {NewsComponent} from '../static-page/news/news.component';
import {PrivacyComponent} from '../static-page/privacy/privacy.component';
import {TermOfUseComponent} from '../static-page/term-of-use/term-of-use.component';
import {TermCustomerComponent} from '../static-page/term-customer/term-customer.component';

const sharedRoutes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'event', component: EventComponent},
  {path: 'example-page', component: ExamplePageComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'news', component: NewsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'term-customer', component: TermCustomerComponent},
  {path: 'term-of-use', component: TermOfUseComponent},
];

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes),
    MatAutocompleteModule,
    FormsModule
  ]
})
export class SharedModule {
}
