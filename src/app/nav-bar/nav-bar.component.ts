import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() searchText = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  lookForStuff(value){
    console.log("passing through navbar");
    this.searchText.next(value);
  }

}
