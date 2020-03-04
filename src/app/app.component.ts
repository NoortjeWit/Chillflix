import { IVideo } from './video-module/video/video.interface';
import { videos } from './videos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: IVideo[] = videos;
}
