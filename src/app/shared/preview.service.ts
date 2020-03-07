import { IVideo } from './../video-module/video/video.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  selectedVideo: IVideo;
  fullDescription: boolean;
  descriptionText: string;

  fullDescriptionChange: Subject<boolean> = new Subject<boolean>();
  descriptionTextChange: Subject<string> = new Subject<string>();

  constructor() {
    this.fullDescriptionChange.subscribe((value) => { this.fullDescription = value });
    this.descriptionTextChange.subscribe(value => this.descriptionText = value);
  }

  toggleFullDescription() {
    this.fullDescriptionChange.next(!this.fullDescription);
    if (this.fullDescription) {
      this.descriptionTextChange.next("show full description");
    } else {
      this.descriptionTextChange.next("show less")
    }
  }

  setFullDescription(value: boolean) {
    this.fullDescriptionChange.next(value);
  }

  setDescriptionText(text: string) {
    this.descriptionTextChange.next(text);
  }

  addSelectedVideo(video: IVideo) {
    this.selectedVideo = video;
  }

  getSelectedVideo(): IVideo {
    return this.selectedVideo;
  }
}
