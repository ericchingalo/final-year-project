import * as _ from 'lodash';
import { Result } from '../models/results.model';

export function resultsSaniziter(results: any[]): Result[] {
  return _.map(results, (data) => ({
    id: data.id,
    created: data.created,
    lastupdated: data.created,
    region: data.device ? data.device.user.region : 'default',
    results: _.map(data.parameter, (param) => ({
      value: param.value,
      parameter: param.parameter.name,
    })),
  }));
}
