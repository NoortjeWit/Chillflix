import { IVideo } from './../video-module/video/video.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  selectedVideo: IVideo;
  public fullDescription: boolean;
  public descriptionText: string;

  constructor() { }

  addSelectedVideo(video: IVideo) {
    this.selectedVideo = video;
  }

  getSelectedVideo(): IVideo {
    return this.selectedVideo;
  }
}
