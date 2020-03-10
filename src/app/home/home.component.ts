import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { IVideo } from '../video-module/video/video.interface';
import { VideoListService } from '../shared/video-list.service';
import { SearchTextService } from '../shared/search-text.service';
import { PreviewService } from '../shared/preview.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Observable<IVideo[]>;
  videosMusic: Observable<IVideo[]>;
  videosMovies: Observable<IVideo[]>;
  videosComedy: Observable<IVideo[]>;
  videosGaming: Observable<IVideo[]>;
  videosAnimals: Observable<IVideo[]>;
  videosTechnology: Observable<IVideo[]>;
  filteredVideos: Observable<IVideo[]>;
  selectedVideo: IVideo;

  constructor(public videoService: VideoListService, public searchService: SearchTextService, public previewService: PreviewService) {
  }

  ngOnInit() {
    // this.videos = this.videoService.getPopularVideos();
    this.videosMusic = this.videoService.getPopularVideosByCategory(10);
    this.filteredVideos = this.videoService.getFilteredVideos();
    // this.videosMovies = this.videoService.getPopularVideosByCategory(1);
    // this.videosComedy = this.videoService.getPopularVideosByCategory(23);
    // this.videosGaming = this.videoService.getPopularVideosByCategory(20);
    // this.videosAnimals = this.videoService.getPopularVideosByCategory(15);
    // this.videosTechnology = this.videoService.getPopularVideosByCategory(28);
  }

  lookForStuff() {
    if (this.searchService.getSearchText() != undefined) {
      return this.videoService.getFilteredVideos();
    }
    else {
      return EMPTY;
    }
  }

}
