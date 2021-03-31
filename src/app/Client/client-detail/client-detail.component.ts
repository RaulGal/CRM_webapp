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


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']


}


)

export class ClientDetailComponent implements OnInit {

  //Sin uso en estos momentos
//users : ClientModel = {
 // id: 0,
  //name:"",
  //business: "",
  //phone:"",
  //notes: "",
  //street:"",
  //plan:"",
//};
  users: any; 
  title3 = "FICHA CLIENTE";


  constructor( private route: ActivatedRoute, public clientDetailService: ClientDetailService, private activatedRoute: ActivatedRoute, private router: Router) {} 


  ngOnInit(): void{
    
    let _this = this;
    _this.route.queryParams.subscribe
    (params => { 
      _this.users.id= params.id;
      _this.users.name = params.name;
      _this.users.business = params.business;
      _this.users.notes = params.notes ;
      _this.users.phone = params.phone;
      _this.users.plan = params.plan;
      _this.users.street = params.street;
        console.log("LOG DE LOS USERS", _this.users.id, _this.users.name )
        
    });

     

        this.clientDetailService.getUsers().subscribe(data =>{this.users = data;
       console.log("LOG DEL GET", data);
     });
  }

  goHome(){

    this.router.navigate(['/']);
    }
}
  
  


  

  
  // public clientService: ClientDetailService
