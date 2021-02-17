import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title4 = "HOME"
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
  }


    title = 'Proyecto';
    title2 = "CRM DE RAUL";
   

    clients = [{name:"Raul", id: 1}, {name:"Nestor", id: 2}, {name:"Alfonso", id: 3}, {name:"Jorge", id: 4}, {name:"Eustaquio", id: 5}]
  
    newClient = {
      name: "",
      id: 0,
    }
  
    navigate (id: number){
      this.clients.indexOf({id: this.newClient.id, name: this.newClient.name});
    
      }
  
    addClient(){
      
      var length = this.clients.length;
      
      this.newClient.id = length + 1;
  
      this.clients.push({id: this.newClient.id, name: this.newClient.name});
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




