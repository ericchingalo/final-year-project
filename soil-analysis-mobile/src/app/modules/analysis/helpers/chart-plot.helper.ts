import * as _ from 'lodash';

import { sanitizeDates } from 'src/app/shared/helpers/sanitize-dates.helper';
import { Result } from '../../history/models/results.model';

export function getGraphParameters(
  data: {
    startDate: string;
    endDate: string;
    parameters: string[];
  },
  results: Result[],
): { series: any[]; periods: any } {
  const sanitizedSeries = filterSeriesByDates(data, results);
  const series = getSeriesData(data, sanitizedSeries);
  const periods = getPeriods(sanitizedSeries);
  return { series, periods };
}

export function getPeriods(sanitizedSeries) {
  const periods: string[] = [];

  _.forEach(sanitizedSeries, (series) => {
    periods.push(sanitizeDates(series.created));
  });

  return periods;
}

export function getSeriesData(data, sanitizedSeries) {
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

export function compareDates(
  constantDate: string,
  comparedDate: string,
  startDate: boolean = false,
): boolean {
  const date1 = new Date(constantDate);
  const date2 = new Date(comparedDate);

  return startDate ? date1 <= date2 : date1 >= date2;
}

export function filterSeriesByDates(data, results: Result[]) {
  const sanitizedResults = _.filter(results, (result: Result) => {
    const sanitizedCreated = sanitizeDates(result.created);
    return (
      compareDates(data.startDate, sanitizedCreated, true) &&
      compareDates(data.endDate, sanitizedCreated)
    );
  });

  return _.reverse(sanitizedResults);
}
