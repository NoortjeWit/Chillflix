import { IVideo } from './../video/video.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // template: '<youtube-player videoId="dQw4w9WgXcQ"></youtube-player>',
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
   @Input()
   videoId: string;

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}

