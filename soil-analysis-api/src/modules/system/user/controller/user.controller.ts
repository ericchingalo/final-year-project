import { Controller } from '@nestjs/common';
import { BaseController } from 'src/shared/controllers/base.controller';
import { UserDTO } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { UserLoginDTO } from '../dtos/user-login.dto';
import { AuthService } from '../services/auth.service';

@Controller('users')
export class UserController extends BaseController<User, UserDTO, UserDTO> {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    super(userService);
  }

  async login(user: UserLoginDTO): Promise<any> {
    return await this.authService.login(user.username, user.password);
  }
}
