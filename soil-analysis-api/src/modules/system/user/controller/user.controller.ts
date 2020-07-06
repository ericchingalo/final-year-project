import { Controller } from '@nestjs/common';
import { BaseController } from 'src/shared/controllers/base.controller';
import { UserDTO } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController extends BaseController<User, UserDTO> {
  constructor(private userService: UserService) {
    super(userService);
  }
}
