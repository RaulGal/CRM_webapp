import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClientDetailService } from "src/app/Client/client-detail.service";
import { ClientDetailComponent } from '../Client/client-detail/client-detail.component';
import {ClientModel} from "src/app/models/client-model"


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  users : ClientModel = {
 id: 0,
name:"",
business: "",
phone:"",
notes: "",
street:"",
plan:"",
};

  constructor(private route: ActivatedRoute, public clientDetailService: ClientDetailService, private activatedRoute: ActivatedRoute, private router: Router, private clientDetailComponent: ClientDetailComponent,) { }

  ngOnInit(): void{

    this.clientDetailService.getUsers().subscribe(data =>{this.users = data;
      console.log("LOG DEL GET", data);
    });
    
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

  }
}
