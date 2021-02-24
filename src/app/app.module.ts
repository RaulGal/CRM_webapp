import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClientDetailComponent } from './Client/client-detail/client-detail.component';
import { HomeComponent } from './home/home.component';
import { ClientDetailService } from "./Client/client-detail.service";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  
  declarations: [
    AppComponent,
    ClientDetailComponent,
    HomeComponent,
    ReactiveFormsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ClientDetailService,
  
  
  ]
})
export class AppModule { }


