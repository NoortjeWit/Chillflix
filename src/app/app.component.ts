import { IVideo } from './video-module/video/video.interface';
import { videos } from './videos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: IVideo[] = videos;

  lookForStuff(value){
    for(let x in this.videos){
      if(this.videos[x].title.toLowerCase().includes(value.toLowerCase())){
        console.log(this.videos[x].title);
      }
    }
    alert("It's working!!" + value);
  }

}
