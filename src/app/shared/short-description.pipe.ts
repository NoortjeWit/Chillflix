import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let shortDesc = value.slice(0,499);
    return shortDesc;
  }

}
