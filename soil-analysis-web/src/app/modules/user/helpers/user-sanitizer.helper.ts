import * as _ from 'lodash';
import { User } from '../models/user.model';

export function userSanitizer(users: any[]): User[] {
  return _.map(users, (user) => ({
    ...user,
    roles: _.map(user.roles, (role) => role.name),
  }));
}

export function sanitizeCurrentUser(user: any): User {
  return {
    ...user,
    roles: _.map(user.roles, (role) => role.name),
  };
}
