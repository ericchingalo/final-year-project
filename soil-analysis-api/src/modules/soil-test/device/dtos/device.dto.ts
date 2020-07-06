import { IsString } from 'class-validator';

export class DeviceDTO {
  @IsString()
  password: string;
}
