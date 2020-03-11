import { VideoTitleLengthPipe } from './../shared/video-title-length.pipe';
import { VideoDurationPipe } from './../shared/video-duration.pipe';
import { ShortDescriptionPipe } from './../shared/short-description.pipe';
import { SuggestionDescriptionPipe} from '../shared/suggestion-description.pipe';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { VideoComponent } from './video/video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { PreviewComponent } from './preview/preview.component';
import { VideoSuggestionComponent} from './videoSuggestion/videoSuggestion.component';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule,
    SlickCarouselModule,
  ],
  declarations: [YoutubePlayerComponent, VideoComponent, VideoListComponent, PreviewComponent, VideoSuggestionComponent, ShortDescriptionPipe, VideoDurationPipe, VideoTitleLengthPipe, SuggestionDescriptionPipe],
  exports: [YoutubePlayerComponent, VideoComponent, VideoListComponent, PreviewComponent, VideoSuggestionComponent, ShortDescriptionPipe, VideoDurationPipe, VideoTitleLengthPipe, SuggestionDescriptionPipe]
})
export class VideoModule { }
