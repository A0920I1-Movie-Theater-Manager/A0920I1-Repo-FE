import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventComponent } from './event/event.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermCustomerComponent } from './term-customer/term-customer.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';
import {RouterModule, Routes} from '@angular/router';

const staticRoutes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'event', component: EventComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'news', component: NewsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'term-customer', component: TermCustomerComponent},
  {path: 'term-of-use', component: TermOfUseComponent}
];

@NgModule({
  declarations: [
    AboutUsComponent,
    EventComponent,
    FaqComponent,
    NewsComponent,
    PrivacyComponent,
    TermCustomerComponent,
    TermOfUseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(staticRoutes)
  ]
})
export class StaticPageModule { }
