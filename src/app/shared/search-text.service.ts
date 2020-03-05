import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchTextService {
  searchText: string;

  setSearchText(text: string){
    this.searchText = text;
  }

  getSearchText(){
    return this.searchText;
  }

  clearSearchText(){
    this.searchText= '';
    return this.searchText;
  }

constructor() { }

}
