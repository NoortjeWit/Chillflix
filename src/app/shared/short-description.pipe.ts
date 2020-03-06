import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let shortDescription: string = value.slice(0,300);
    shortDescription = shortDescription.concat("...");
    console.log(args[0]);
    if (args[0]) {
      return value;
    } else {
      return shortDescription;
    }
  }

}
