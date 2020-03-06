import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'videoDuration'
})
export class VideoDurationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Math.round(moment.duration(value).asMinutes());
  }

}
