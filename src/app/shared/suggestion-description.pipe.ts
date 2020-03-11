import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suggestionDescription'
})
export class SuggestionDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(0,150);
  }

}
