import { ShortDescriptionPipe } from './../../shared/short-description.pipe';
import { VideoDurationPipe } from './../../shared/video-duration.pipe';
import { PreviewService } from './../../shared/preview.service';
import { IVideo } from './../video/video.interface';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewComponent } from './preview.component';

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  let previewServiceStub: any = {
    getSelectedVideo: () => { }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PreviewComponent,
        VideoDurationPipe,
        ShortDescriptionPipe
      ],
      providers: [
        {
          provide: PreviewService, useValue: previewServiceStub
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const previewSpy = spyOn(previewServiceStub, 'getSelectedVideo').and.returnValue({ videoId: "kjwe029", title: "Titanic" } as IVideo);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
