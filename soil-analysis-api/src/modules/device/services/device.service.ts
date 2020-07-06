import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from '../entities/device.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/services/base.service';
import { DeviceDTO } from '../dtos/device.dto';

@Injectable()
export class DeviceService extends BaseService<Device, DeviceDTO> {
  public deviceRepository: Repository<Device>;
  constructor(@InjectRepository(Device) repository: Repository<Device>) {
    super(repository);
    this.deviceRepository = repository;
  }
}
