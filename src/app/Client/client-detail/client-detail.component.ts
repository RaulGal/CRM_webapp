import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "src/app/home/home.component"
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { identifierModuleUrl, Identifiers } from '@angular/compiler';
import { ClientDetailService } from "src/app/Client/client-detail.service";
import { from, Subscriber } from "rxjs"; 
import { subscribeOn } from 'rxjs/operators';
import {ClientModel} from "src/app/models/client-model"
import {ClientInfoComponent} from "src/app/client-info/client-info.component"



@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']


}


)

export class ClientDetailComponent implements OnInit {

  users: any; 
  title3 = "FICHA CLIENTE";


  constructor( private route: ActivatedRoute, public clientDetailService: ClientDetailService, private activatedRoute: ActivatedRoute, private router: Router ) {} 


  ngOnInit(): void{
    this.clientDetailService.getUsers().subscribe(data =>{this.users = data;
      console.log("LOG DEL GET", data);
    });
  }

  navigate (id: any, name : any, business: any, notes: any,
    phone: any, street: any, plan: any ){
       this.router.navigate(['/client-info'], {queryParams:{id: id, name: name, business: business, notes: notes, street: street, plan: plan, phone: phone }});
       console.log("LOG DEL NAVIGATE", name, id, business, notes, phone, street, plan)
      }

  goHome(){

    this.router.navigate(['/']);
    }

    
}
  
  


  

  
  // public clientService: ClientDetailService
