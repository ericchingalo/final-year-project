import { Controller, Post, Body, Req } from '@nestjs/common';
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

  @Post('login')
  async login(@Body() user: UserLoginDTO, @Req() request): Promise<any> {
    const userObject = await this.authService.login(
      user.username,
      user.password,
    );
    if (userObject) {
      request.session.user = userObject;
      return userObject;
    } else {
      return {
        httpStatus: 'Unauthorized',
        httpStatusCode: 401,
        status: 'ERROR',
        message: 'Password or Username is incorrect.',
      };
    }
  }
}
