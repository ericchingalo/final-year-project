import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { BaseService } from '../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  endpoint = 'devices';
  constructor(private readonly http: BaseService<Device>) {}

  findAll(): Observable<any> {
    return this.http.findAll(this.endpoint);
  }

  create(device: Device): Observable<any> {
    return this.http.create(this.endpoint, device);
  }

  update(id: string, updatedDevice: Partial<Device>): Observable<any> {
    return this.http.update(this.endpoint, id, updatedDevice);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.endpoint, id);
  }

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
