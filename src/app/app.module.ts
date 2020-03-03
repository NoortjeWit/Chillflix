import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { YoutubePlayerModule } from './youtube-player/youtube-player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
