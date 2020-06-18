import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Result } from '../../modules/history/models/results.model';
import { results } from '../constants/soil-test-data.constant';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private soilTestResult: Result[] = results;
  constructor() {}

  getSoilResult(): Result[] {
    const sorted = _.sortBy(this.soilTestResult, (result: Result) => result.id);
    console.log(sorted);
    return _.reverse(sorted);
  }

  getGraphParameters(data: {
    startDate: string;
    endDate: string;
    parameters: string[];
  }): { series: any[]; periods: any } {
    const sanitizedSeries = _.filter(this.soilTestResult, (result: Result) => {
      const sanitizedCreated = moment(result.created).format('YYYY-MM-DD');
      return (
        this.compareDates(data.startDate, sanitizedCreated, true) &&
        this.compareDates(data.endDate, sanitizedCreated)
      );
    });

    console.log(sanitizedSeries);
    return sanitizedSeries;
  }

  compareDates(
    constantDate: string,
    comparedDate: string,
    startDate: boolean = false,
  ): boolean {
    const date1 = new Date(constantDate);
    const date2 = new Date(comparedDate);

    return startDate ? date1 <= date2 : date1 >= date2;
  }
}
