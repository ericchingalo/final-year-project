import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './entities/persmission.entity';
import { PermissionService } from './services/permission.service';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [PermissionService],
  exports: [PermissionService],
})
export class PermissionModule {}
