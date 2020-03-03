import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './youtube-player.component';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  declarations: [YoutubePlayerComponent],
  exports: [YoutubePlayerComponent]
})
export class YoutubePlayerModule { }
