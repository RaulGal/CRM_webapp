import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientDetailService {

  constructor(private http: HttpClient) {}

getUsers(): Observable <any> {
    return this.http.get("https://my-crm-api.herokuapp.com/clients")}


   }

