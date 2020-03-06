import { PreviewService } from './shared/preview.service';
import { IVideo } from './video-module/video/video.interface';
import { videos } from './videos';
import { Component, OnInit } from '@angular/core';
import { VideoListService } from './shared/video-list.service';
import { SearchTextService } from './shared/search-text.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  videos: Observable<IVideo[]>;
  filteredVideos: IVideo[];
  selectedVideo: IVideo;
  videoTest$: Observable<any>;

  constructor(public videoService: VideoListService, public searchService: SearchTextService, public previewService: PreviewService){
  }

  ngOnInit(){
    this.videos = this.videoService.getPopularVideos();
    this.videoTest$ = this.videoService.getPopularVideos();
  }

  lookForStuff(){
    if(this.searchService.getSearchText() != undefined)
      return this.videoService.getFilteredVideos(this.searchService.getSearchText());
    else
      return [];
  }

}
