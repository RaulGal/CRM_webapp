import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule, NgControl, FormControlDirective } from '@angular/forms';
import {ClientDetailService} from "src/app/Client/client-detail.service"
import {Router, ActivatedRoute, ParamMap, RouteConfigLoadEnd, RouterLink } from '@angular/router';




@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})


export class ReactiveFormsComponent implements OnInit {

public user : any;
public formClient!: FormGroup;
  constructor(private fb: FormBuilder, public clientDetailService: ClientDetailService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.createForm();
  }

createForm(){

  this.formClient = this.fb.group({

    name : new FormControl (""),
    business : new FormControl(""),
    notes  : new FormControl(""),
    street  : new FormControl(""),
    phone  : new FormControl(""),
    plan   : new FormControl(""),
  });

}
 ngOnInit(): void{
  
  }

  onSubmit(){
 
     this.clientDetailService.createUser(this.formClient.value).subscribe(data =>{this.formClient = data; console.log("LOG DEL put", data);
    });
 
   console.log("LOG DEL FORMULARIO ", this.formClient.value);
  }
  
goHome(){

    this.router.navigate(['/']);
    }
}


