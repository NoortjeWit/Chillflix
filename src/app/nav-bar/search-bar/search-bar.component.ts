import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchTextService } from 'src/app/shared/search-text.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  constructor(private searchService: SearchTextService) { }

  ngOnInit() {
  }

  searchVideo(search){
    console.log("we are looking for " + search);
    this.searchService.setSearchText(search);
  }

}
