import { IsString } from 'class-validator';

export class PermissionDTO {
  @IsString()
  permission: string;
}
