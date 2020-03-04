import { Component, OnInit } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList: VideoComponent[];

  constructor() { }

  ngOnInit(): void {
  }

}
