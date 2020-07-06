import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../../shared/services/base.service';
import { User } from '../entities/user.entity';
import { UserDTO } from '../dtos/user.dto';

@Injectable()
export class UserService extends BaseService<User, UserDTO> {
  public userRepository: Repository<User>;
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
    this.userRepository = repository;
  }
}
