import * as _ from 'lodash';
import { Result } from '../models/results.model';

export function resultsSaniziter(results: any[]): Result[] {
  return _.map(results, (data) => ({
    id: data.id,
    created: data.created,
    lastupdated: data.created,
    region: capitalizeRegion(data.device ? data.device.user.region : 'Default'),
    results: _.map(data.parameter, (param) => ({
      value: param.value,
      parameter: param.parameter.name,
    })),
  }));
}

export function capitalizeRegion(region: string): string {
  return _.upperFirst(_.toLower(region));
}
