import { Component } from '@angular/core';
import { __makeTemplateObject } from 'tslib';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Proyecto';
  title2 = "CRM DE RAUL";
  


  clients = [{name:"Raul", id: 1}, {name:"Nestor", id: 2}, {name:"Alfonso", id: 3}, {name:"Jorge", id: 4}, {name:"Eustaquio", id: 5}]

  newClient = {
    name: "",
    id: 0,
  }




  addClient(){
    
    var length = this.clients.length;
    
    this.newClient.id = length + 1;

    this.clients.push({id: this.newClient.id, name: this.newClient.name});
  }



}


  



 
 
      
 

