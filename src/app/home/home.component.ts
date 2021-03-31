import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, RouteConfigLoadEnd, RouterLink } from '@angular/router';
import { from } from 'rxjs';
import {ClientDetailService} from "src/app/Client/client-detail.service"
import { ClientDetailComponent } from '../Client/client-detail/client-detail.component';
import {ClientModel} from "src/app/models/client-model"
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsComponent} from "src/app/pages/reactive-forms/reactive-forms.component"
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatList} from "@angular/material/list"
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from "@angular/material/tabs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

users: any;
  
constructor(private activatedRoute: ActivatedRoute, private router: Router, public clientDetailService: ClientDetailService, ) {}


  ngOnInit(): void {

    this.clientDetailService.getUsers().subscribe(data =>{this.users = data;
    console.log("LOG DEL GET", data);
  });


   }
  //Sin uso ahora mismo
  navigate (id: any, name : any, business: any, notes: any,
    phone: any, street: any, plan: any ){
       this.router.navigate(['/client-detail'], {queryParams:{id: id, name: name, business: business, notes: notes, street: street, plan: plan, phone: phone }});
       console.log("LOG DEL NAVIGATE", name, id, business, notes, phone, street, plan)
      }
  
  addClient(){
    this.router.navigate(['/formulario']);
    }
   
  
    goClients(){

      this.router.navigate(['/client-detail']);
      }


   }


    

  
    
  

// export class AppComponent 


  //title = 'Proyecto';
 // title2 = "CRM DE RAUL";
  
 // clients = [{name:"Raul", id: 1}, {name:"Nestor", id: 2}, {name:"Alfonso", id: 3}, {name:"Jorge", id: 4}, {name:"Eustaquio", id: 5}]

 // newClient = {
  //  name: "",
  //  id: 0,
 // }


  //addClient(){
    
   // var length = this.clients.length;
    
  //  this.newClient.id = length + 1;

    //this.clients.push({id: this.newClient.id, name: this.newClient.name});




