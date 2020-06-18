import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Result } from '../../modules/history/models/results.model';
import { results } from '../constants/soil-test-data.constant';
import { sanitizeDates } from '../helpers/sanitize-dates.helper';

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
    let resultsSeries = [];
    _.forEach(data.parameters, (param: string) => {
      resultsSeries.push({
        type: undefined,
        name: param,
        data: [],
      });
    });
    const sanitizedSeries = _.filter(this.soilTestResult, (result: Result) => {
      const sanitizedCreated = sanitizeDates(result.created);
      return (
        this.compareDates(data.startDate, sanitizedCreated, true) &&
        this.compareDates(data.endDate, sanitizedCreated)
      );
    });

    _.forEach(sanitizedSeries, (seriesData) => {
      _.forEach(seriesData.results, (result) => {
        resultsSeries = _.map(resultsSeries, (series) => {
          return {
            ...series,
            data:
              series.name === result.parameter
                ? [...series.data, result.value]
                : series.data,
          };
        });
      });
    });

    return { series: resultsSeries, periods: null };
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
