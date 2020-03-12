import { IVideo } from './../video/video.interface';
import { PreviewService } from './../../shared/preview.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { VideoListComponent } from './video-list.component';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  let previewServiceStub: any = {
    addSelectedVideo: (video: IVideo) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoListComponent],
      imports: [
        SlickCarouselModule
      ],
      providers: [
        { provide: PreviewService, useValue: previewServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectVideo calls service to select a video', () => {
    // arrange:
    const testVideo: IVideo = { title: "Titanic", duration: 92, videoId: "iowe930js" } as IVideo;
    const serviceSpy = spyOn(previewServiceStub, 'addSelectedVideo');

    // act: 
    component.selectVideo(testVideo);

    // expect:
    expect(serviceSpy).toHaveBeenCalledTimes(1);
    expect(serviceSpy).toHaveBeenCalledWith(testVideo);
  });

});
