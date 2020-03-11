import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { LoginService } from "../shared/login.service";
import { videos } from "../shared/stubs/videos";
import { IVideo } from "../video-module/video/video.interface";
import { PreviewService } from "../shared/preview.service";

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
    public previewService: PreviewService
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

  getRandomInt(max, num?) {
    let rand = Math.floor(Math.random() * Math.floor(max));
    if (num) {
      while (rand == num) {
        rand = Math.floor(Math.random() * Math.floor(max));
      }
    }
    return rand;
  }
}
