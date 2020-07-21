import { Injectable } from '@nestjs/common';
import { generateBasicAuthanticationString } from '../helpers/basic-auth-token.helper';
import { User } from '../entities/user.entity';
@Injectable()
export class AuthService {
  async login(username: string, password: string): Promise<User> {
    const token = generateBasicAuthanticationString(username, password);
    console.log(token);
    const user = User.authenticateUserByToken(token);

    return user;
  }
}
