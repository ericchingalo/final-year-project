import * as _ from 'lodash';
import { CountrySummaryData } from '../models/country-summary-data.model';

export function countryDataSummarySanitizer(values: any): CountrySummaryData {
  const sanitizedMonths: string[] = [];
  const sanitizedValues: number[] = [];
  _.forEach(values, (value) => {
    sanitizedMonths.push(value.month);
    sanitizedValues.push(value.data);
  });

  const sanitizedData: CountrySummaryData = {
    data: sanitizedValues.reverse(),
    periods: sanitizedMonths.reverse(),
  };

  return sanitizedData;
}
