import { Injectable } from '@angular/core';
import { VideoListService } from './video-list.service';

@Injectable({
  providedIn: 'root'
})
export class SearchTextService {
  searchText: string;

  constructor(private videoService: VideoListService) { }

  setSearchText(text: string){
    this.searchText = text;
    this.videoService.setFilteredVideos2(this.searchText);
  }

  getSearchText(){
    return this.searchText;
  }

  clearSearchText(){
    this.searchText= '';
    return this.searchText;
  }



}
