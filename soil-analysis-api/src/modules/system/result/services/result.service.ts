import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from '../enntities/result.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../../../../shared/services/base.service';
import { ResultDTO } from '../dtos/result.dto';

@Injectable()
export class ResultService extends BaseService<Result, ResultDTO> {
  resultRepository: Repository<Result>;
  constructor(@InjectRepository(Result) repository: Repository<Result>) {
    super(repository);
    this.resultRepository = repository;
  }
}
