import { Controller, Get, Param } from '@nestjs/common';
import { DeviceService } from '../services/device.service';
import { Device } from '../entities/device.entity';
import { BaseController } from 'src/shared/controllers/base.controller';
import { DeviceDTO } from '../dtos/device.dto';

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
  // @UseGuards(SessionGuard)
  async findDeviceResults(@Param('id') id: string) {
    return await this.deviceService.findDeviceResults(id);
  }
}
