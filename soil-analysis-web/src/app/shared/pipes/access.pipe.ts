import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'access',
})
export class AccessPipe implements PipeTransform {
  transform(value: string | string[]): boolean {
    const unauthorized = ['tester', 'guest'];
    return !_.includes(unauthorized, value);
  }
}
