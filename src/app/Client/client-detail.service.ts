import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeComponent } from "src/app/home/home.component" 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailService {



  constructor(private http: HttpClient, private route: ActivatedRoute) {}

getUsers(): Observable <any> {
  
  

    return this.http.get("https://my-crm-api.herokuapp.com/clients")}


createUser(user:any): Observable<any>{
      return this.http.post("https://my-crm-api.herokuapp.com/clients", user);
    }


}


   

