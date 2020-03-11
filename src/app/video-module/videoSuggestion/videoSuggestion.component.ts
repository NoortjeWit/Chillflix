import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from '../video/video.interface';


@Component({
  selector: 'app-videoSuggestion',
  templateUrl: './videoSuggestion.component.html',
  styleUrls: ['./videoSuggestion.component.css']
})
export class VideoSuggestionComponent implements OnInit {
  @Input() video: IVideo;


  constructor() { }

  ngOnInit() {
  }

}
