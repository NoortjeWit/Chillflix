import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { VideoComponent } from './video/video.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  declarations: [YoutubePlayerComponent, VideoComponent, VideoListComponent],
  exports: [YoutubePlayerComponent, VideoComponent, VideoListComponent]
})
export class VideoModule { }
