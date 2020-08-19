import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormater',
})
export class DateFormaterPipe implements PipeTransform {
  transform(value: string): string {
    return moment(value).format('DD-MM-YYYY');
  }
}
