import { videos } from './videos';
import { VideoComponent } from './video-module/video/video.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: VideoComponent[] = videos;
}
