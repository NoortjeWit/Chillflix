import { Injectable } from '@angular/core';
import { IVideo } from '../video-module/video/video.interface';
import { videos } from '../videos';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private videos: IVideo[] = videos;
  private filteredVideos: IVideo[] =[];

  getVideos(){
    return this.videos;
  }

  addVideo(video: IVideo){
   this.videos.push(video);
  }

  getFilteredVideos(searchText: string){
    this.filteredVideos =[];
    for(let x in this.videos){
      if(this.videos[x].title.toLowerCase().includes(searchText.toLowerCase()) || this.videos[x].genre.toLowerCase().includes(searchText.toLowerCase()) ){
        console.log("Title found: " + this.videos[x].title);
        this.filteredVideos.push(this.videos[x]);
      }
    }

    console.log(this.filteredVideos);
    return this.filteredVideos;
  }


  constructor() { }

}
