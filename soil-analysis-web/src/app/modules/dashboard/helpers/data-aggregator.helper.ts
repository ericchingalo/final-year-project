import { Result } from '../models/results.model';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ParameterResult } from '../models/parameter-result.model';

export function aggregateDataToCountry(
  soilData: Result[],
  parameter: string
): any[] {
  let groupedData: any[] = groupData(soilData);
  groupedData = _.map(groupedData, (dataValue) => ({
    month: dataValue.month,
    data: _.round(aggregateByMean(dataValue.data, parameter), 2),
  }));
  return groupedData;
}

export function aggregateByMean(data: Result[], parameter: string) {
  return _.meanBy(data, (value: Result) => {
    const result: ParameterResult = _.find(
      value.results,
      (dataResult: ParameterResult) => dataResult.parameter === parameter
    );

    return result.value;
  });
}

export function groupData(soilData: Result[]) {
  const filteredData = _.filter(soilData, (data: Result) => {
    const lastDate = new Date();
    lastDate.setMonth(lastDate.getMonth() - 5);
    lastDate.setDate(1);

    const dataDate = new Date(data.created);

    return dataDate > lastDate;
  });

  const groupedSoilData = _.groupBy(filteredData, (data: Result) => {
    return moment(data.created).format('MMM');
  });

  const groupedData = [];

  _.forIn(groupedSoilData, (value, key) => {
    groupedData.push({ month: key, data: value });
  });

  return groupedData;
}
