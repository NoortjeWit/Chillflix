import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  title: string;
  type: string;
  duration: number;
  genre: string;
  image: string;
  videoId: string;
  rating: number;
  description: string;

  constructor() { }
}
