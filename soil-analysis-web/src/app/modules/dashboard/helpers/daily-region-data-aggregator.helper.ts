import * as _ from 'lodash';
import { generateRandomID } from '../../../core/helpers/random-id-generator.helper';

function getRegionData(regionData) {
  const dataByRegions = _.groupBy(regionData, 'region');
  const newData = _.flattenDeep(
    _.map(_.keys(dataByRegions), (region) => {
      const regionsData = dataByRegions[region];

      const resultsByParameter = _.groupBy(
        _.flattenDeep(
          _.map(regionsData, (regionsDataObj) => regionsDataObj.results || [])
        ),
        'parameter'
      );
      const results = _.flattenDeep(
        _.map(_.keys(resultsByParameter), (parameter) => {
          const value = _.meanBy(resultsByParameter[parameter] || [], 'value');
          return { parameter, value: value.toFixed(2) };
        })
      );
      return {
        id: generateRandomID(),
        region,
        created: regionsData[0].created,
        results,
      };
    })
  );
  return newData;
}

export function aggregrateDailyRegionData(data: any) {
  const dataByDate = _.values(_.groupBy(data, 'created'));
  const aggregatedData = _.flattenDeep(
    _.map(dataByDate, (dataGroup) => {
      return getRegionData(dataGroup);
    })
  );
  return aggregatedData;
}
