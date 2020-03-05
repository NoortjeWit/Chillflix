import { IVideo } from './../video-module/video/video.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  selectedVideo: IVideo;

  constructor() { }

  addSelectedVideo(video: IVideo) {
    this.selectedVideo = video;
  }

  getSelectedVideo(): IVideo {
    return this.selectedVideo;
  }
}
