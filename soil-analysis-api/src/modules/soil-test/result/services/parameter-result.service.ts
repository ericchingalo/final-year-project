import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParameterResult } from '../entities/parameter-result.entity';
import { Repository } from 'typeorm';
import { ParameterResultDTO } from '../dtos/parameter-result.dto';
import { BaseService } from '../../../../shared/services/base.service';

@Injectable()
export class ParameterResultService extends BaseService<
  ParameterResult,
  ParameterResultDTO
> {
  public parameterResultRepository: Repository<ParameterResult>;
  constructor(
    @InjectRepository(ParameterResult) repository: Repository<ParameterResult>,
  ) {
    super(repository);
    this.parameterResultRepository = repository;
  }
}
