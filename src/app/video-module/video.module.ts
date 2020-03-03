import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './youtube-component/youtube-player.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  declarations: [YoutubePlayerComponent, VideoComponent],
  exports: [YoutubePlayerComponent, VideoComponent]
})
export class VideoModule { }
