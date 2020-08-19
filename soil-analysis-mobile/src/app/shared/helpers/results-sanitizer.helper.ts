import * as _ from 'lodash';

export function resultsSanitizer(data: any, user) {
  const sanitizedResults = _.map(data.results, (dataResult: any) => ({
    id: dataResult.id,
    device: data.id,
    created: dataResult.created,
    results: _.map(dataResult.parameter, (param) => ({
      parameter: param.parameter.name,
      value: param.value,
    })),
    user,
  }));

  return sanitizedResults;
}
