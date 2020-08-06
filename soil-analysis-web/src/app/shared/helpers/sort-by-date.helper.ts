import { User } from '../../modules/user/models/user.model';
import { Device } from '../../modules/user/models/device.model';
import { Result } from '../../modules/dashboard/models/results.model';
export function sortByDate(
  object1: User | Device | Result,
  object2: User | Device | Result
): number {
  const date1 = new Date(object1.created);
  const date2 = new Date(object2.created);
  return date1 < date2 ? 1 : date1 === date2 ? 0 : -1;
}
