import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoTitleLength'
})
export class VideoTitleLengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(0,35);
  }

}
