import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../../shared/services/base.service';
import { UserRole } from '../entities/user-role.entity';
import { UserRoleDTO } from '../dtos/user-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRoleService extends BaseService<UserRole, UserRoleDTO> {
  public userRoleRepository: Repository<UserRole>;
  constructor(@InjectRepository(UserRole) repository: Repository<UserRole>) {
    super(repository);
    this.userRoleRepository = repository;
  }
}
