import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video = {
    title: 'Lion King',
    image: 'imageURL'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
