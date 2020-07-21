import {
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UsePipes,
  UseGuards,
} from '@nestjs/common';

import { BaseService } from '../services/base.service';
import { CustomValidationPipe } from '../pipes/validation.pipe';
import { AuthGuard } from '../../modules/system/user/guards/auth.guard';

export class BaseController<T, C, U> {
  constructor(private readonly baseService: BaseService<T, C>) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll() {
    return await this.baseService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.baseService.findOneById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new CustomValidationPipe())
  async post(@Body() data: C) {
    return await this.baseService.create(data);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @UsePipes(new CustomValidationPipe())
  async put(@Param('id') id: string, @Body() data: U) {
    return await this.baseService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async delete(@Param('id') id: string) {
    return await this.baseService.delete(id);
  }
}
