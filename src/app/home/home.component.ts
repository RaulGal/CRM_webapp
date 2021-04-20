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
import {ClientInfoComponent} from "src/app/client-info/client-info.component"
import { UsersService } from "src/app/users.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

users: any;
  
constructor(private activatedRoute: ActivatedRoute, private router: Router, public clientDetailService: ClientDetailService, public userService: UsersService) {}


  ngOnInit(): void {

    this.getUserLogged();

    this.clientDetailService.getUsers().subscribe(data =>{this.users = data;
      console.log("LOG DEL GET", data);
    });
   }

  
  addClient(){
    this.router.navigate(['/formulario']);
    }
   
  
    goClients(){

      this.router.navigate(['/client-detail']);
      }
      goClientsinfo(){

        this.router.navigate(['/client-info']);
        }
  getUserLogged() {
     this.userService.getUser().subscribe(user => {
      console.log("GETUSERLOGGED", user);
          });

   }


}