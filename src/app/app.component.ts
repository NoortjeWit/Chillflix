import { IVideo } from './video-module/video/video.interface';
import { Component, OnInit } from '@angular/core';
import { VideoListService } from './shared/video-list.service';
import { SearchTextService } from './shared/search-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  videos: IVideo[];
  filteredVideos: IVideo[];

  constructor(public videoService: VideoListService, public searchService: SearchTextService){
  }

  ngOnInit(){
    this.videos = this.videoService.getVideos();
  }

  lookForStuff(){
    if(this.searchService.getSearchText() != undefined)
      return this.videoService.getFilteredVideos(this.searchService.getSearchText());
    else
      return [];
  }

}
