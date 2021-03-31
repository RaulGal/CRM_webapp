import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, RouteConfigLoadEnd, RouterLink } from '@angular/router';
import {ClientDetailService} from "src/app/Client/client-detail.service"
import { ClientDetailComponent } from '../Client/client-detail/client-detail.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public clientDetailService: ClientDetailService) { }

  ngOnInit(): void {
  }
  goClients(){

    this.router.navigate(['/client-detail']);
    }
}
