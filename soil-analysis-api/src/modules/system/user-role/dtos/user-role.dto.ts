import { IsString } from 'class-validator';

export class UserRoleDTO {
  @IsString()
  name: string;
}
