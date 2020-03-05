import { PreviewService } from './shared/preview.service';
import { IVideo } from './video-module/video/video.interface';
import { videos } from './videos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  videos: IVideo[] = videos;
  filteredVideos: IVideo[] = [];
  selectedVideo: IVideo;

constructor(public previewService: PreviewService) {}

ngOnInit(): void {

}

  lookForStuff(value){
    this.filteredVideos =[];
    for(let x in this.videos){
      if(this.videos[x].title.toLowerCase().includes(value.toLowerCase()) || this.videos[x].genre.toLowerCase().includes(value.toLowerCase()) ){
        console.log("Title found: " + this.videos[x].title);
        this.filteredVideos.push(this.videos[x]);
      }
    }
  }

}
