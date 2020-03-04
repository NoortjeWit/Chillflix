import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchText = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchVideo(search){
    console.log("we are looking for " + search);
    this.searchText.next(search);
  }

}
