import * as _ from 'lodash';
import { User } from 'src/app/modules/account/models/user.model';

export function userSanitizer(user: any): User {
  return {
    ...user,
    roles: user.roles ? _.upperFirst(user.roles.name) : '',
  };
}
