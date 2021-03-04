import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CountryListComponent} from './country-list/country-list.component';
import {MatTableModule} from '@angular/material/table';
import {CountryService} from './country-list/country.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [CountryService, HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
