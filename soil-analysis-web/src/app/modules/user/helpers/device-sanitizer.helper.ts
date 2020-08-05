import * as _ from 'lodash';
import { Device } from '../models/device.model';

export function deviceSanitizer(data: any[]): Device[] {
  return _.map(data, (device) => ({
    ...device,
    user: device.user.username,
  }));
}
