import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormsModule} from "@angular/forms"
import {Router, ActivatedRoute, ParamMap, RouteConfigLoadEnd, RouterLink } from '@angular/router';
import { UsersService } from "src/app/users.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router, public userService: UsersService) {}

  ngOnInit(): void {
  }



  login() {
    const user = {email: this.email, password: this.password};

    this.userService.login(user).subscribe(data => {
      this.userService.setToken(data.token)
      console.log("Datitos", data);
      this.router.navigateByUrl('/');
    });
    
}}
