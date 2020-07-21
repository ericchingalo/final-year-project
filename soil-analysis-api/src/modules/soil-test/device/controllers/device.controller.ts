import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { DeviceService } from '../services/device.service';
import { Device } from '../entities/device.entity';
import { BaseController } from 'src/shared/controllers/base.controller';
import { DeviceDTO } from '../dtos/device.dto';
import { AuthGuard } from 'src/modules/system/user/guards/auth.guard';

@Controller('devices')
export class DeviceController extends BaseController<
  Device,
  DeviceDTO,
  DeviceDTO
> {
  constructor(private deviceService: DeviceService) {
    super(deviceService);
  }

  @Get(':id/results')
  @UseGuards(new AuthGuard())
  async findDeviceResults(@Param('id') id: string) {
    return await this.deviceService.findDeviceResults(id);
  }
}
