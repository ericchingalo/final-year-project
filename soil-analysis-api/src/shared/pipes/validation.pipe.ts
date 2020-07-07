import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (value instanceof Object && this.isEmpty(value)) {
      throw new HttpException(
        'Validation failed: No body submitted',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const error = await validate(object);

    if (error.length > 0) {
      throw new BadRequestException(
        `Validation failed: ${this.formatErrors(error)}`,
      );
    }

    return value;
  }

  private formatErrors(errors: any[]) {
    return errors
      .map(error => {
        const { constraints } = error;

        for (const property in constraints) {
          if (constraints.hasOwnProperty(property)) {
            return constraints[property];
          }
        }
      })
      .join(', ');
  }

  //   helper to check native Javascript types
  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private isEmpty(value: any) {
    return Object.keys(value).length === 0;
  }
}
