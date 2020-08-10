import * as _ from 'lodash';
import { User } from '../models/user.model';

export function userSanitizer(users: any[]): User[] {
  return _.map(users, (user) => ({
    ...user,
    roles: user.roles.name,
  }));
}

export function sanitizeCurrentUser(user: any): User {
  return {
    ...user,
    roles: user.roles ? user.roles.name : '',
  };
}
