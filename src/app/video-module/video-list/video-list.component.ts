import { PreviewService } from './../../shared/preview.service';
import { IVideo } from './../video/video.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: IVideo[];
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1168,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private previewService: PreviewService) { }

  ngOnInit(): void {
  }

  trackByFunction(index, item){
    if (!item) {
      return null;
    }
    return index;
  }

  selectVideo(video) {
    this.previewService.addSelectedVideo(video);
    this.previewService.fullDescription = false;
    this.previewService.descriptionText =  "show full description";
    window.scroll(0, 0);
  }


  // addSlide() {
  //   this.videoList.push();
  // }

  // removeSlide() {
  //   this.videoList.length = this.videoList.length - 1;
  // }

  // afterChange(e) {
  //   console.log('afterChange');
  // }

  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

}
