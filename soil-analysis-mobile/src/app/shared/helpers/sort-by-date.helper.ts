import { Result } from 'src/app/modules/history/models/results.model';

export function sortByDate(object1: Result, object2: Result): number {
  const date1 = new Date(object1.created);
  const date2 = new Date(object2.created);
  return date1 < date2 ? 1 : date1 === date2 ? 0 : -1;
}
