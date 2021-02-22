import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "src/app/home/home.component"
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Identifiers } from '@angular/compiler';
import { ClientDetailService } from "src/app/Client/client-detail.service";
import { from, Subscriber } from "rxjs"; 
import { subscribeOn } from 'rxjs/operators';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']


}


)
export class ClientDetailComponent implements OnInit {

  users: any;
  title3 = "FICHA CLIENTE";


  constructor(  private route: ActivatedRoute, public clientDetailService: ClientDetailService) {} 


  ngOnInit(): void{
    let _this = this;
    _this.route.queryParams.subscribe
    (params => { 
      _this.users.id= params.id;
      _this.users.name = params.name;
        console.log(_this.users.id, _this.users.name )
      });

      console.log("LOG DEL SUSCRIBE", _this.users);
  }
  
  }


  

  
  // public clientService: ClientDetailService
