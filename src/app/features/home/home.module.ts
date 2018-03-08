import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './../../services/search/search.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [HomepageComponent, SearchComponent],
  providers:[
    SearchService
  ]
})
export class HomeModule { }
