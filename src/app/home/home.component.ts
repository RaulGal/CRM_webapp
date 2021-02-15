import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title4 = "HOME"
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
