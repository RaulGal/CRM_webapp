import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, RouteConfigLoadEnd, RouterLink } from '@angular/router';
import { from } from 'rxjs';
import {ClientDetailService} from "src/app/Client/client-detail.service"
import { ClientDetailComponent } from '../Client/client-detail/client-detail.component';
import {ClientModel} from "src/app/models/client-model"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  title = 'Proyecto';
  title2 = "CRM DE RAUL";
  title4 = "HOME"
  users: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public clientDetailService: ClientDetailService, clientModel: ClientModel) {}


  ngOnInit(): void {

    this.clientDetailService.getUsers().subscribe(data =>{this.users = data;
    console.log("LOG DEL GET", data);
  });

  //  this.clientDetailService.createUser({
   //   name: "NOMBRE NUEVO AÑADIDO",
     
  //  }).subscribe(data =>{this.users = data;
   //   console.log(data);});

   }
  
  navigate (id: any, name : any, business: any, notes: any,
    phone: any, street: any, plan: any ){
       this.router.navigate(['/client-detail'], {queryParams:{id: id, name: name, business: business, notes: notes, street: street, plan: plan, phone: phone }});
       console.log("LOG DEL NAVIGATE", name, id, business, notes, phone, street, plan)
      }
  
  addClient(){
    this.clientDetailService.createUser({id: this.users.id, name: this.users.name});
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




