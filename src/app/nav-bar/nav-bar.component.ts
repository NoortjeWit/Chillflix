import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }


}
