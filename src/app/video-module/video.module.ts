import { VideoDurationPipe } from './../shared/video-duration.pipe';
import { ShortDescriptionPipe } from './../shared/short-description.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { VideoComponent } from './video/video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule,
    SlickCarouselModule,
  ],
  declarations: [YoutubePlayerComponent, VideoComponent, VideoListComponent, PreviewComponent, ShortDescriptionPipe, VideoDurationPipe],
  exports: [YoutubePlayerComponent, VideoComponent, VideoListComponent, PreviewComponent, ShortDescriptionPipe, VideoDurationPipe]
})
export class VideoModule { }
