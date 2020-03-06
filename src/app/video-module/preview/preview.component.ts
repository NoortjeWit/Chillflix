
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
  fullDescription: Boolean = false;
  descriptionToggleText: string = "show full description";

  constructor(public previewService: PreviewService) { }

  ngOnInit(): void {
    this.video = this.previewService.getSelectedVideo();
  }
  descriptionLength(): void {
    this.fullDescription = !this.fullDescription;
    if (this.fullDescription) {
      this.descriptionToggleText = "show less";
    } else {
      this.descriptionToggleText = "show full description";
    }
  }

}
