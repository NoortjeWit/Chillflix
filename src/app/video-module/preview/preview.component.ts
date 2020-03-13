
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

  }

  descriptionLength(): void {
    this.previewService.fullDescription = !this.previewService.fullDescription;
    if (this.previewService.fullDescription) {
      this.previewService.descriptionText = "show less";
    } else {
      this.previewService.descriptionText = "show full description";
    }
  }

}
