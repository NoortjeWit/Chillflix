import { VideoTitleLengthPipe } from './video-title-length.pipe';

describe('VideoTitleLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoTitleLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
