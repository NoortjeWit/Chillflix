import { Injectable } from "@angular/core";
import { IVideo } from "../video-module/video/video.interface";
import { videos, returnVideoListStubs } from "../videos";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class VideoListService {
  private apiKey: string = "AIzaSyBWyCSXgf_0tXnmavsH9lRhcxV5aPA3SKM";

  //private videos: IVideo[] = videos;
  private videos: IVideo[];
  private filteredVideos: IVideo[] = [];
  private categoryList: any;

  constructor(private client: HttpClient) {
    this.client
      .get(
        `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${this.apiKey}`
      )
      .subscribe(message => {
        this.categoryList = message;
        console.log(message);
      });
  }

  getVideos() {
    return this.videos;
  }

  addVideo(video: IVideo) {
    this.videos.push(video);
  }

  getFilteredVideos(searchText: string) {
    this.filteredVideos = [];
    for (let x in this.videos) {
      if (
        this.videos[x].title.toLowerCase().includes(searchText.toLowerCase()) ||
        this.videos[x].genre.toLowerCase().includes(searchText.toLowerCase())
      ) {
        console.log("Title found: " + this.videos[x].title);
        this.filteredVideos.push(this.videos[x]);
      }
    }

    console.log(this.filteredVideos);
    return this.filteredVideos;
  }

  getPopularVideos(): Observable<IVideo[]> {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&key=${this.apiKey}`;

    return this.youtubeGetQuery(url);
  }

  getPopularVideosByCategory(categoryId: number): Observable<IVideo[]> {
<<<<<<< HEAD
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&videoCategoryId=${categoryId}&key=${this.apiKey}`;
=======
    if (environment.enableStub) {
      console.log("stubs enabled");
      return returnVideoListStubs();
>>>>>>> 9753c374b0dfabff07a089d07eebba9e94b44dd6

      // Here read a json or stubbed ts file
    } else {
      console.log("stubs disabled");
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&videoCategoryId=${categoryId}&key=${this.apiKey}`;

      return this.youtubeGetQuery(url);
    }

    // Here do the real call
  }

  findCategory(categoryId: string) {
    if (this.categoryList) {
      for (let x in this.categoryList.items) {
        if (this.categoryList.items[x].id === categoryId) {
          return this.categoryList.items[x].snippet.title;
        }
      }
    }
  }

  youtubeGetQuery(url): Observable<IVideo[]> {
    return this.client.get(url).pipe(
      map((value: any) => {
        return value.items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id,
            type: item.kind,
            duration: item.contentDetails.duration,
            genre: this.findCategory(item.snippet.categoryId),
            image: item.snippet.thumbnails.medium.url,
            rating: item.statistics.likeCount,
            description: item.snippet.description
          } as IVideo;
        });
      })
    );
  }
}
