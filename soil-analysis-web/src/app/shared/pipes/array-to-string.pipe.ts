import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  transform(value: string[]): string {
    const str = value ? value.toString() : '';
    return str;
  }
}
