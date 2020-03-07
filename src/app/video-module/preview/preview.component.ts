
import { IVideo } from './../video/video.interface';
import { PreviewService } from './../../shared/preview.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() video: IVideo;

  constructor(public previewService: PreviewService) { }

  ngOnInit(): void {
    this.video = this.previewService.getSelectedVideo();
  }

  descriptionLength(): void {
    this.previewService.toggleFullDescription();
    if (this.previewService.fullDescription) {
      this.previewService.setDescriptionText("show less");
    } else {
      this.previewService.setDescriptionText("show full description");
    }
  }

}
