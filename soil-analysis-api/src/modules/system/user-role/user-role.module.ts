import { Module } from '@nestjs/common';
import { UserRoleService } from './services/user-role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './entities/user-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],
  controllers: [],
  providers: [UserRoleService],
  exports: [UserRoleService],
})
export class UserRoleModule {}
