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
        id: '0zxmrOlRwY8',
        username: 'Chingalo',
        region: 'Songea',
        role: 'admin',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'hiUF8C6JrDv',
        username: 'Megamind',
        region: 'Dar',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'oJpSt4TOpcj',
        username: 'Tibz',
        region: 'Bukoba',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'xF1BCL2amEE',
        username: 'Miguel',
        region: 'Mtwara',
        role: 'researcher',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'xF1BC120mEs',
        username: 'Mirabelle',
        region: 'Mbeya',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'aF1dCL2amEE',
        username: 'Eric',
        region: 'Songea',
        role: 'tester',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: 'xF1BCL2amzE',
        username: 'Lisa',
        region: 'Zanzibar',
        role: 'admin',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },

      {
        id: '0zxmrOlRwY7',
        username: 'Elsa',
        region: 'Morogoro',
        role: 'admin',
        created: '2020-07-23T23:42:02.002Z',
        lastupdated: '2020-07-23T23:42:02.002Z',
      },
    ];
  }
}
