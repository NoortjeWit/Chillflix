import { Component, OnInit, Input } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: VideoComponent[];

  constructor() { }

  ngOnInit(): void {
  }

}
