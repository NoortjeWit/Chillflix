import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { LoginService } from "../shared/login.service";
import { videos } from "../shared/stubs/videos";
import { IVideo } from "../video-module/video/video.interface";
import { PreviewService } from "../shared/preview.service";
import { VideoListService } from '../shared/video-list.service';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  videoSuggestion: IVideo;
  videoSuggestion2: IVideo;

  constructor(
    public loginService: LoginService,
    public previewService: PreviewService,
    public videoService: VideoListService
  ) {}

  ngOnInit() {
    const num = this.getRandomInt(videos.length);
    this.videoSuggestion = videos[num];
    this.videoSuggestion2 = videos[this.getRandomInt(videos.length, num)];
  }

  selectVideo(video) {
    this.previewService.addSelectedVideo(video);
    this.previewService.fullDescription = false;
    this.previewService.descriptionText = "show full description";
    window.scroll(0, 0);
  }

  showFavorites(){
    this.videoService.showFavorites = !this.videoService.showFavorites;
  }


  getRandomInt(max, num?: number) {
    let rand = Math.floor(Math.random() * Math.floor(max));
    if (num != undefined) {
      while (rand == num) {
        rand = Math.floor(Math.random() * Math.floor(max));
        console.log(rand, num);
      }
    }
    return rand;
  }
}
