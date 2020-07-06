import { IsString } from 'class-validator';

export class UserPermissionDTO {
  @IsString()
  permission: string;
}
