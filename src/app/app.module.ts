import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { AppRoutingModule } from './app-routing.module';

import {NgxPaginationModule} from 'ngx-pagination';// pagination module
import { FilterPipe } from './pipes/filter.pipe'; 
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule

  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
