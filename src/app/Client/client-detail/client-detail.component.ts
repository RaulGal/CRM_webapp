import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  title3 = "FICHA CLIENTE";
  constructor(  private route: ActivatedRoute,
    ) {} 
  
  ngOnInit(): void {
  }

}
