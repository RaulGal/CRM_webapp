import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
public formClient = new FormGroup({

  name : new FormControl (),
  business : new FormControl(),
  notes  : new FormControl(),
  street  : new FormControl(),
  phone  : new FormControl(),
  plan   : new FormControl(),
});

  onSubmit(){
    console.log("LOG DEL FORMULARIO ", this.formClient.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
