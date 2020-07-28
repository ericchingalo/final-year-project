import * as _ from 'lodash';
import { Result } from '../models/results.model';
import { RegionDataCount } from '../models/region-data-count.model';

export function getRegionCount(results: Result[]): RegionDataCount[] {
  const regionList = getDistinctRegions(results);
  const regionDataCount: RegionDataCount[] = [];

  _.forEach(regionList, (region: string) => {
    const regionData: Result[] = _.filter(
      results,
      (data: Result) => data.region === region
    );
    regionDataCount.push({ region, dataCount: regionData.length });
  });

  return regionDataCount;
}

export function getDistinctRegions(results: Result[]): string[] {
  const regionList = [];

  _.forEach(results, (data: Result) => {
    if (!_.includes(regionList, data.region)) {
      regionList.push(data.region);
    }
  });

  return regionList;
}
