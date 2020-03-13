import { HttpClient } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { VideoListService } from './video-list.service';
import { IVideo } from '../video-module/video/video.interface';
import { of } from 'rxjs';

describe('Service: VideoList', () => {
  // let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let service: VideoListService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])
    // service = new VideoListService(<any>httpClientSpy)

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideoListService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(VideoListService);
    // service = new VideoListService(httpClient);
  });

  it('should get videos', () => {
    // arrange: set up test variables

    // const expectedMovieResult: any = { items: [] }
    // httpClientSpy.get.and.returnValue(of(expectedMovieResult));
    const httpCallResult: any = {
      items: []
    };
    const mappedResult = [];

    // Act: perform tests

    service.getPopularVideos().subscribe(actualResult => {
      // Assert: check if tests show expected outcome;
      expect(actualResult).toEqual(mappedResult)
    })

    // assert:
    const expectedUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&key=AIzaSyDVKO0BdJZ-QN0iFju-0VPUjGS9LutIOo0';
    const req = httpTestingController.expectOne(expectedUrl);

    expect(req.request.method).toEqual('GET');
    req.flush(httpCallResult);
    httpTestingController.verify();


  })

  it('should get filtered videos', (done: DoneFn) => {
    const httpCallResult: any = {
      items: []
    };
    const mappedResult = [];
    // Act: perform tests

    service.getFilteredVideos().subscribe(actualResult => {
      // Assert: check if tests show expected outcome;
      console.log(actualResult, mappedResult);
      expect(actualResult).toEqual(mappedResult);
      done();
    })

    // assert:

    httpTestingController.verify();



  })
});
