import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Result } from '../../modules/history/models/results.model';
import { results } from '../constants/soil-test-data.constant';
import { sanitizeDates } from '../helpers/sanitize-dates.helper';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private soilTestResult: Result[] = results;
  endpoint: string;
  constructor(private http: BaseService<Result>) {
    this.endpoint = 'devices';
  }

  getAllResults(deviceId: string): Observable<any> {
    return this.http.findAll(`${this.endpoint}/${deviceId}/results`);
  }

  getSoilResult(): Result[] {
    const sorted = _.sortBy(this.soilTestResult, (result: Result) => result.id);
    return _.reverse(sorted);
  }

  getGraphParameters(data: {
    startDate: string;
    endDate: string;
    parameters: string[];
  }): { series: any[]; periods: any } {
    const sanitizedSeries = this.filterSeriesByDates(data);
    const series = this.getSeriesData(data, sanitizedSeries);
    const periods = this.getPeriods(sanitizedSeries);
    return { series, periods };
  }

  getPeriods(sanitizedSeries) {
    const periods: string[] = [];

    _.forEach(sanitizedSeries, (series) => {
      periods.push(sanitizeDates(series.created));
    });

    return periods;
  }
  getSeriesData(data, sanitizedSeries) {
    let resultsSeries = [
      {
        type: undefined,
        name: data.parameters,
        data: [],
      },
    ];

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

    return resultsSeries;
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

  filterSeriesByDates(data) {
    return _.filter(this.soilTestResult, (result: Result) => {
      const sanitizedCreated = sanitizeDates(result.created);
      return (
        this.compareDates(data.startDate, sanitizedCreated, true) &&
        this.compareDates(data.endDate, sanitizedCreated)
      );
    });
  }
}
