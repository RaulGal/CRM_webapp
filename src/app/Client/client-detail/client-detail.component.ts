import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "src/app/home/home.component"
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Identifiers } from '@angular/compiler';
import { ClientDetailService } from "src/app/Client/client-detail.service";


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  
  styleUrls: ['./client-detail.component.scss']


}


)
export class ClientDetailComponent implements OnInit {
  newClient = {
    name: "",
    id: 0,
  }

  title3 = "FICHA CLIENTE";
  constructor(  private route: ActivatedRoute) {} 

 
  ngOnInit(): void{

    this.route.queryParams
    //console.log(this.clientService);
    
    .subscribe( 
     
      params => { 
        this.newClient.id= params.id;
        this.newClient.name = params.name;
        console.log(this.newClient)});


  }

  }

  
  

  
  // public clientService: ClientDetailService
