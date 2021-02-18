import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "src/app/home/home.component"
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/filter';
import { Identifiers } from '@angular/compiler';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  
  styleUrls: ['./client-detail.component.scss']


}


)
export class ClientDetailComponent implements OnInit {

  clients = [{name:"Raul", id: 1}, {name:"Nestor", id: 2}, {name:"Alfonso", id: 3}, {name:"Jorge", id: 4}, {name:"Eustaquio", id: 5}]

  title3 = "FICHA CLIENTE";
  constructor(  private route: ActivatedRoute) {} 
  
  ngOnInit(id:number, name:string): void{

    this.route.queryParamMap
    
    .subscribe(params => {
      this.clients.orderObj = ({id: params.id}, {name: params.name}); // { name: "raul" }



  }



