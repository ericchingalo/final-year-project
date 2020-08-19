import * as _ from 'lodash';
import * as moment from 'moment';
import { generateRandomID } from '../../../shared/helpers/random-id-generator.helper';
import { Result } from '../../history/models/results.model';

export function dataAggregator(data: Result[]) {
  const sanitizedData = _.map(data, (result: Result) => ({
    ...result,
    created: moment(result.created).format('YYYY-MM-DD'),
  }));
  const dataByCreated = _.groupBy(sanitizedData, 'created');
  const newData = _.flattenDeep(
    _.map(_.keys(dataByCreated), (created) => {
      const regionsData = dataByCreated[created];

      const resultsByParameter = _.groupBy(
        _.flattenDeep(
          _.map(regionsData, (regionsDataObj) => regionsDataObj.results || []),
        ),
        'parameter',
      );
      const results = _.flattenDeep(
        _.map(_.keys(resultsByParameter), (parameter) => {
          const value = _.meanBy(resultsByParameter[parameter] || [], 'value');
          return { parameter, value: Number(value.toFixed(2)) };
        }),
      );
      return {
        id: generateRandomID(),
        created: regionsData[0].created,
        results,
      };
    }),
  );
  return newData;
}
