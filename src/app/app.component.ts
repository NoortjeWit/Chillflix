import { videos } from './videos';
import { VideoComponent } from './video-module/video/video.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: VideoComponent[] = videos;

  lookForStuff(value){
    for(let x in this.videos){
      if(this.videos[x].title.toLowerCase().includes(value.toLowerCase())){
        console.log(this.videos[x].title);
      }
    }
    alert("It's working!!" + value);
  }
}
