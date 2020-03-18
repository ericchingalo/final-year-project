import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(time: string): string {
    return moment(time).format('MMMM Do YYYY, h:mm:ss a');
  }
}
