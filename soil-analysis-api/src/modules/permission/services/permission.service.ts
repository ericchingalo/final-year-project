import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../shared/services/base.service';
import { Permission } from '../entities/persmission.entity';
import { PermissionDTO } from '../dtos/permission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionService extends BaseService<Permission, PermissionDTO> {
  public permissionRepository: Repository<Permission>;
  constructor(
    @InjectRepository(Permission) repository: Repository<Permission>,
  ) {
    super(repository);
    this.permissionRepository = repository;
  }
}
