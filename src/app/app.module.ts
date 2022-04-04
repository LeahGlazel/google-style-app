import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './CustomMatPaginatorIntl';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SearchFilterComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
