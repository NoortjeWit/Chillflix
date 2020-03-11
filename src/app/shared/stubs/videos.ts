import { IVideo } from "./../../video-module/video/video.interface";
import { Observable, of } from "rxjs";

export let videos: IVideo[] = [
  {
    title: "The Lion King",
    type: "film",
    duration: 98,
    genre: "Animation",
    image: "assets/img/video-LionKing.png",
    videoId: "lFzVJEksoDY",
    rating: 10937202,
    description: "A lion and a lionness go to the graveyard."
  },
  {
    title: "Mulan",
    type: "film",
    duration: 82,
    genre: "Animation",
    image: "assets/img/video-Mulan.png",
    videoId: "HKH7_n425Ss",
    rating: 4270003,
    description: "A girl pretends to be a boy."
  },
  {
    title: "Beauty and the Beast",
    type: "film",
    duration: 101,
    genre: "Animation",
    image: "assets/img/video-BeautyAndTheBeast.png",
    videoId: "tRlzmyveDHE",
    rating: 3583028,
    description: "Monster becomes man."
  },
  {
    title: "Titanic",
    type: "film",
    duration: 175,
    genre: "Drama",
    image: "assets/img/video-Titanic.png",
    videoId: "ezcvpLIyifU",
    rating: 1948,
    description: "Iceberg"
  },
  {
    title: "Lord of the Rings: The Fellowship Of The Ring",
    type: "film",
    duration: 197,
    genre: "Fantasy",
    image: "assets/img/video-LordOfTheRingsFellowshipOfTheRing.png",
    videoId: "V75dMMIW2B4",
    rating: 8.8,
    description: "Dwarves and orcs and wizards and elves."
  },
  {
    title: "Mr. Bean's Holiday",
    type: "film",
    duration: 142,
    genre: "Comedy",
    image: "assets/img/video-MrBeansHoliday.png",
    videoId: "hSxLUd8aly4",
    rating: 7.2,
    description: "Mini Cooper"
  },
  {
    title: "American Pie 1",
    type: "film",
    duration: 116,
    genre: "Comedy",
    image: "assets/img/video-AmericanPie1.png",
    videoId: "iUZ3Yxok6N8",
    rating: 6.3,
    description: "Do you love apple pie?"
  }
];

export const returnVideoListStubs = (): Observable<IVideo[]> => {
  return of(videos);
};
