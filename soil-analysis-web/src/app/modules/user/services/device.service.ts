import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor() {}

  getDummyDevices(): Device[] {
    return [
      {
        id: 'dabjdsdasd-132b',
        user: 'Megamind',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'ad141fsf-bu2316',
        user: 'Tibz',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'dl-asd02mlasdad',
        user: 'Mirabelle',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },
    ];
  }
}
