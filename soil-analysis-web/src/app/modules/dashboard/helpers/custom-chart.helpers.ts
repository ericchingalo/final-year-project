import * as _ from 'lodash';
import { sanitizeDates } from './date-sanitizer.helper';
import { Result } from '../models/results.model';
import { FilterMetadata } from '../models/filter-metadata.model';
import {
  CustomGraphParameters,
  RegionData,
} from '../models/custom-graph-parameter.model';
import { ParameterResult } from '../models/parameter-result.model';

/**
 *
 * @param constantDate fixed date
 * @param comparedDate date to be compared
 * @param startDate is the compared date start date
 */
export function compareDates(
  constantDate: string | Date,
  comparedDate: string | Date,
  startDate: boolean = false
): boolean {
  const date1 = new Date(constantDate);
  const date2 = new Date(comparedDate);

  return startDate ? date1 <= date2 : date1 >= date2;
}

/**
 *
 * @param results results
 * @param data filtering metadata
 */
export function filterSeriesByDates(
  results: Result[],
  data: FilterMetadata
): Result[] {
  return _.filter(results, (result: Result) => {
    const sanitizedCreated = sanitizeDates(result.created);
    return (
      compareDates(data.startDate, sanitizedCreated, true) &&
      compareDates(data.endDate, sanitizedCreated)
    );
  });
}

/**
 *
 * @param sanitizedSeries sanitized results
 */
export function getPeriods(sanitizedSeries: Result[]) {
  const periods: string[] = [];

  _.forEach(sanitizedSeries, (series) => {
    if (!_.find(periods, (date) => date === series.created)) {
      periods.push(sanitizeDates(series.created));
    }
  });

  return periods;
}

/**
 *
 * @param sanitizedSeries sanitized results
 * @param regionData region data for the series attribute
 * @param periods periods for plotting graph
 * @param parameter selected parameter
 */
export function getRegionSeriesData(
  sanitizedSeries: Result[],
  regionData: RegionData,
  periods: string[],
  parameter: string
): RegionData {
  let sanitizedRegionData = regionData;
  const data = [];
  _.forEach(periods, (period: string) => {
    const regionDataSeriesValue: Result = _.find(
      sanitizedSeries,
      (seriesData: Result) =>
        period === sanitizeDates(seriesData.created) &&
        regionData.name === seriesData.region
    );

    const parameterValue: ParameterResult = regionDataSeriesValue
      ? _.find(
          regionDataSeriesValue.results,
          (result: ParameterResult) => result.parameter === parameter
        )
      : null;
    data.push(regionDataSeriesValue ? parameterValue.value : null);
  });

  sanitizedRegionData = { ...sanitizedRegionData, data };

  return sanitizedRegionData;
}

/**
 *
 * @param data filtering metadata
 * @param periods periods for plotting the graph
 * @param sanitizedSeries data results
 */
export function getSeriesDataByRegion(
  data: FilterMetadata,
  periods: string[],
  sanitizedSeries: Result[]
): RegionData[] {
  const regionSeries: RegionData[] = [];
  _.forEach(data.regions, (region: string) => {
    regionSeries.push({
      type: undefined,
      name: region,
      data: [],
    });
  });

  const sanitizedRegionSeries = _.map(regionSeries, (region: RegionData) => {
    const sanitizedRegionData = getRegionSeriesData(
      sanitizedSeries,
      region,
      periods,
      data.parameter
    );

    return {
      ...region,
      data: sanitizedRegionData.data,
    };
  });

  return sanitizedRegionSeries;
}

/**
 *
 * @param data filtering metadata
 */
export function getCustomGraphTitle(data: FilterMetadata): string {
  return `${
    data.parameter === 'pH' ? data.parameter : _.upperFirst(data.parameter)
  } recorded from ${sanitizeDates(data.startDate)} to ${sanitizeDates(
    data.endDate
  )}`;
}

/**
 *
 * @param data filtering metadata
 * @param results soil test results
 */
export function getGraphCustomParameters(
  data: FilterMetadata,
  results: Result[]
): CustomGraphParameters {
  const sanitizedSeriesByDates = filterSeriesByDates(results, data);
  const periods = _.reverse(getPeriods(sanitizedSeriesByDates));
  const title = getCustomGraphTitle(data);
  const series = getSeriesDataByRegion(data, periods, sanitizedSeriesByDates);
  return { series, periods, title };
}
