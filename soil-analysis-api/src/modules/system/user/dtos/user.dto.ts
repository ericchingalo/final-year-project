import { IsString, IsEmail } from 'class-validator';

export class UserDTO {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  region: string;
}
