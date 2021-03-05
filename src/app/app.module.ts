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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from "@angular/material/menu/"  
import{MatSidenavModule} from "@angular/material/sidenav"
import {MatToolbarModule} from "@angular/material/toolbar"


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
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ClientDetailService,
  
  
  ]
})
export class AppModule { }


