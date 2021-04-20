import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormsModule} from "@angular/forms"
import {Router, ActivatedRoute, ParamMap, RouteConfigLoadEnd, RouterLink } from '@angular/router';
import {UsersService} from "src/app/users.service"


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: any;
  password: any;
  confirmPassword: any;
  passwordError: any;

  constructor(public userService: UsersService, private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
      console.log("registrandome" , data);
    },

    error => {
      console.log(error);
    });

  }

}
