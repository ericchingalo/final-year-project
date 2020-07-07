import { IsInt } from 'class-validator';

export class ParameterResultDTO {
  @IsInt()
  value: number;
}
