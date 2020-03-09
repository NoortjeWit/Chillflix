import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'videoDuration'
})
export class VideoDurationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (environment.enableStub) {
      return value;
    }
    return Math.round(moment.duration(value).asMinutes());
  }

}
