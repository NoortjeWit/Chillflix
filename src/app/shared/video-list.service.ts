import { categories } from "./stubs/categories";
import { Injectable, OnInit } from "@angular/core";
import { IVideo } from "../video-module/video/video.interface";
import { returnVideoListStubs } from "./stubs/videos";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, of, EMPTY } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class VideoListService implements OnInit {
  private apiKey: string = "AIzaSyDVKO0BdJZ-QN0iFju-0VPUjGS9LutIOo0";
  //private apiKey: string = "AIzaSyBWyCSXgf_0tXnmavsH9lRhcxV5aPA3SKM";
  //private apiKey: string = "AIzaSyBzcxTIAnAie2aFS_BD2KuXncrwChVLNDQ";
  private url: string;

  private filteredVideos: Observable<IVideo[]>;
  private categoryList: any;
  showFavorites: boolean;

  constructor(private client: HttpClient) {

  }

  ngOnInit(){
    if (environment.enableStub) {
      this.categoryList = categories;
    }
    else {
      this.client.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${this.apiKey}`)
        .subscribe(message => {
          this.categoryList = message;
          console.log(message);
        });
    }

  }



  getFilteredVideos(): Observable<IVideo[]> {
    return this.filteredVideos;
  }

  setFilteredVideos2(searchText: string) {
    if (environment.enableStub) {
      console.log("stubs enabled");
      this.url = `http://localhost:4200/assets/searchData.json`;
    } else {
      this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&q=${searchText}&key=${this.apiKey}`;
    }


    //this.filteredVideos = EMPTY;

    this.filteredVideos = this.client.get(this.url).pipe(
      map((value: any) => {
        // console.log(value);
        return value.items.map(item => {
           //console.log(item);
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            type: item.kind,
            duration: 0,
            genre: this.findCategory(item.snippet.categoryId),
            image: item.snippet.thumbnails.medium.url,
            rating: 0,
            description: item.snippet.description
          } as IVideo;
        });
      })
    );

    this.filteredVideos.subscribe(item => console.log(item));
  }

  getPopularVideos(): Observable<IVideo[]> {
    if (environment.enableStub) {
      console.log("stubs enabled");
      return returnVideoListStubs();
    } else {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&key=${this.apiKey}`;

      return this.youtubeGetQuery(url);
    }
  }

  getPopularVideosByCategory(categoryId: number): Observable<IVideo[]> {
    if (environment.enableStub) {
      console.log("stubs enabled");
      return returnVideoListStubs();

      // Here read a json or stubbed ts file
    } else {
      console.log("stubs disabled");
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&videoCategoryId=${categoryId}&key=${this.apiKey}`;

      return this.youtubeGetQuery(url);
    }

    // Here do the real call
  }

  getSingleVideoTest() {
    // const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc`;

    // return this.youtubeGetQuery(url);
  }

  getLikedVideos() {
    if (environment.enableStub) {
      // const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=5&myRating=like`;

      // return this.youtubeGetQuery(url);

    } else {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=5&myRating=like`;

      return this.youtubeGetQuery(url);
    }
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
