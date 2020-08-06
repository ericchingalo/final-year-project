import { ParameterResult } from './parameter-result.model';

export interface Result {
  id: string;
  region: string;
  created: string;
  results: ParameterResult[];
}
