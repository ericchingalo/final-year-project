import { Pipe, PipeTransform } from '@angular/core';
import { ParameterResult } from '../models/parameter-result.model';
import * as _ from 'lodash';

@Pipe({
  name: 'parameter',
})
export class ParameterPipe implements PipeTransform {
  transform(values: ParameterResult[], parameter): number | string {
    const paramObject: ParameterResult = _.find(
      values,
      (value: ParameterResult) => value.parameter === parameter
    );

    return paramObject ? paramObject.value : 'N/A';
  }
}
