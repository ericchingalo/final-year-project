import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getDummyUsers(): User[] {
    return [
      {
        username: 'Chingalo',
        region: 'Songea',
        role: 'admin',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        username: 'Megamind',
        region: 'Dar',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        username: 'Tibz',
        region: 'Bukoba',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        username: 'Miguel',
        region: 'Mtwara',
        role: 'researcher',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        username: 'Mirabelle',
        region: 'Mbeya',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        username: 'Eric',
        region: 'Songea',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        username: 'Lisa',
        region: 'Zanzibar',
        role: 'admin',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        username: 'Elsa',
        region: 'Morogoro',
        role: 'admin',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },
    ];
  }
}
