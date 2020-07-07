import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { ResultController } from './controllers/result.controller';
import { ResultService } from './services/result.service';
import { ParameterResult } from './entities/parameter-result.entity';
import { ParameterResultService } from './services/parameter-result.service';

@Module({
  imports: [TypeOrmModule.forFeature([Result, ParameterResult])],
  controllers: [ResultController],
  providers: [ResultService, ParameterResultService],
  exports: [ResultService, ParameterResultService],
})
export class ResultModule {}
