import { Injectable } from '@angular/core';
import { IVideo } from '../video-module/video/video.interface';
import { videos } from '../videos';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private apiKey: string = 'AIzaSyDVKO0BdJZ-QN0iFju-0VPUjGS9LutIOo0';

  //private videos: IVideo[] = videos;
  private videos: IVideo[];
  private filteredVideos: IVideo[] =[];

  constructor(private client: HttpClient) {
  }

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

  getPopularVideos(): Observable<IVideo[]>{
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=10&key=${this.apiKey}`;

    return this.client.get(url).pipe(
      map(
        (value: any) => {
          return value.items.map(item =>{
            return {
              title : item.snippet.title,
              videoId: item.id,
              type: item.kind,
              duration: item.contentDetails.duration,
              genre: item.snippet.categoryId,
              image: item.snippet.thumbnails.medium.url,
              rating: item.statistics.likeCount,
              description: item.snippet.description
            } as IVideo;
          })}));

  }




}
