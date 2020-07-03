import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParameterModule } from './modules/parameter/parameter.module';
import { UserModule } from './modules/user/user.module';
import { PermissionModule } from './modules/permission/permission.module';
import { DeviceModule } from './modules/device/device.module';
import { RoleModule } from './modules/role/role.module';
import { ResultModule } from './modules/result/result.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ParameterModule, UserModule, PermissionModule, DeviceModule, RoleModule, ResultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
