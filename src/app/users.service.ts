import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { 
  
  }

  login(user: any): Observable<any> {
    return this.http.post("https://bb4y2fx65p.api.quickmocker.com/auth", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("https://bb4y2fx65p.api.quickmocker.com/auth", user);
}

setToken(token: string) {
  this.cookies.set("token", token);


}
getToken() {
  return this.cookies.get("token")}



  getUser() {
    return this.http.get("https://bb4y2fx65p.api.quickmocker.com/auth");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}


